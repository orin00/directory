import jwt from "jsonwebtoken";

// 
export const verifyToken = async (req, res, next) => {
  try {
    // Authorization 헤더에서 토큰 가져옴
    let token = req.header("Authorization");

    // 토큰이 없을 경우 "액세스 오류"
    if (!token) {
      return res.status(403).send("액세스 오류");
    }

    // 토큰이 Bearer로 시작하는 경우 Bearer 를 제거
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    // jwt.verify 함수로 토큰 검증
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // 검증에 성공하면, 검증된 정보를 req.user에 저장
    req.user = verified;

    // next()를 호출하여 다음 미들웨어로 이동
    next();
  } catch (err) {
    // 검증 실패, 에러 메시지 
    res.status(500).json({ error: err.message });
  }
};