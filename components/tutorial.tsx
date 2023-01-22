import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Header from "./ui/header";
import RegBtn from "./ui/regbtn";

interface Props {
  isMobile: boolean;
}

const Tutorial = ({ isMobile }: Props) => {
  const isSmaller = useMediaQuery("(min-width:400px)");

  return isMobile ? (
    <Container maxWidth={"xl"} sx={{ mt: "80px" }}>
      <Box sx={{ px: "150px" }}>
        <Header isMobile={isMobile} text="КАК ПРИНЯТЬ УЧАСТИЕ" />
      </Box>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/tutorBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "800px",
          width: "100%",
          mt: "45px",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            width: "46%",
            height: "70%",
            ml: "150px",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Box
            sx={{
              fontSize: "20px",
              lineHeight: "20px",
              fontFamily: "Gotham Pro Light",
              color: "white",
            }}
            dangerouslySetInnerHTML={{
              __html: `
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>1. Зарегистрироваться на сайте проекта <strong style='text-decoration: underline; text-decoration-thickness: 1px'>до 3 февраля</strong></div>
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>2. Собрать пакет документов (оригиналы):</div>
                            <ul style="margin-left: 3em">
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>паспорт или свидетельство о рождении;</li>
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>полис ОМС или ДМС;</li>
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>полис страхования жизни и здоровья от несчастных случаев, действительный на день соревнования;</li>
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>медицинское заключение о допуске к спортивным соревнованиям по форме 1144-н;</li>
                            </ul>
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>3. Предоставить документы в зоне регистрации перед </br> началом соревнований.</div>
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>4. На старт! Желаем успехов!</div>`,
            }}
          />
          <Stack
            sx={{
              width: "100%",
              height: "42px",
              justifyContent: "center",
              alignItems: "center",
              border: "1px dashed #FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "23px",
                color: "white",
              }}
            >
              Рядом с катком есть пункт проката.
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            bottom: "2%",
            right: "3%",
            width: "543px",
          }}
        >
          <RegBtn isMobile={isMobile} onClick={() => {}} />
        </Box>
      </Box>
    </Container>
  ) : (
    <Box sx={{ mt: "32px", width: "100%" }}>
      <Stack>
        <Header isMobile={isMobile} text="КАК ПРИНЯТЬ УЧАСТИЕ" />
        <Box
          sx={{
            backgroundImage: "url(/images/backgrounds/mobile/tutorBg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "671px",
            width: "100%",
          }}
        >
          <Stack
            sx={{ height: "100%", width: "100%" }}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Box
              sx={{
                fontFamily: "Gotham Pro Light",
                fontSize: isSmaller ? "20px" : "15px",
                lineHeight: "20px",
                fontWeight: 400,
                color: "white",
                width: "80%",
              }}
              dangerouslySetInnerHTML={{
                __html: `
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>1. Зарегистрироваться на сайте проекта <strong style='text-decoration: underline; text-decoration-thickness: 1px'>до 3 февраля</strong></div>
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>2. Собрать пакет документов (оригиналы):</div>
                            <ul style="margin-left: 3em">
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>паспорт или свидетельство о рождении;</li>
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>полис ОМС или ДМС;</li>
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>полис страхования жизни и здоровья от несчастных случаев, действительный на день соревнования;</li>
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>медицинское заключение о допуске к спортивным соревнованиям по форме 1144-н;</li>
                            </ul>
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>3. Предоставить документы в зоне регистрации перед </br> началом соревнований.</div>
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>4. На старт! Желаем успехов!</div>`,
              }}
            />
            <Stack
              sx={{
                width: "80%",
                height: "42px",
                justifyContent: "center",
                alignItems: "center",
                border: "1px dashed #FFFFFF",
                py: "5px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontWeight: 700,
                  fontSize: isSmaller ? "24px" : "18px",
                  lineHeight: "23px",
                  color: "white",
                  textAlign: "center",
                  textIndent: "6px",
                }}
              >
                Рядом с катком есть пункт проката.
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            backgroundImage:
              "url(/images/backgrounds/mobile/tutor-bottomBg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "420px",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "-30px",
              right: 0,
              left: 0,
              mx: "auto",
              width: "342px",
            }}
          >
            <RegBtn isMobile={isMobile} onClick={() => {}} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
export default Tutorial;
