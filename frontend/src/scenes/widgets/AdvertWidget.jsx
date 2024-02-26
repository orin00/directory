import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          프로젝트 소개
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="/about.jpg"
        style={{ borderRadius: "0.75rem", margin: "1.4rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>개발기간</Typography>
        <Typography color={medium}>2024.02.16 ~ 2024.02.25</Typography>
      </FlexBetween>
      <Typography color={medium} m="1rem 0">
        초콜릿처럼 달콤한 서비스만을 제공해드리는 SNS 서비스를 제작해보고자 만들게 되었습니다.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
