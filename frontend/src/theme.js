// color design tokens export
export const colorTokens = {
  primary: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#fee5d8",
    100: "#f9ccb2",
    200: "#f3b38d",
    300: "#ea9a69",
    400: "#d2691e",
    500: "#ac571c",
    600: "#884619",
    700: "#653616",
    800: "#452612",
    900: "#26170b",
    1000: "#0A0A0A",
  },
};

// 다크모드 설정과 디폴트모드 설정시 컬러 세팅
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // 다크 모드 시 컬러 세팅 값
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.primary[100],
              main: colorTokens.primary[200],
              mediumMain: colorTokens.primary[300],
              medium: colorTokens.primary[400],
              light: colorTokens.primary[700],
            },
            background: {
              default: colorTokens.primary[900],
              alt: colorTokens.primary[800],
            },
          }
        : {
            // 라이트 모드 시 컬러 세팅 값
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              mediumMain: colorTokens.primary[400],
              medium: colorTokens.primary[300],
              light: colorTokens.primary[50],
            },
            background: {
              default: colorTokens.primary[10],
              alt: colorTokens.primary[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Nanum+Gothic", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Nanum+Gothic", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Nanum+Gothic", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Nanum+Gothic", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Nanum+Gothic", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Nanum+Gothic", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Nanum+Gothic", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
