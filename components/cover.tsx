import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import RegBtn from "./ui/regbtn";
import IceIcon from "./ui/ice";

interface Props {
  isMobile: boolean;
}

const Cover = ({ isMobile }: Props) => {
  const isSmaller = useMediaQuery("(min-width:400px)");

  return isMobile ? (
    <Container disableGutters maxWidth={"lg"}>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/cover.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "820px",
          width: "100%",
          pt: "14px",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            alignItems: "flex-end",
            width: "100%",
          }}
          spacing={"111px"}
        >
          <Stack direction={"row"} spacing={"33px"} sx={{ mr: "4em" }}>
            <Box component={"img"} src={"/images/logos/departmentLogo.svg"} />
            <Stack direction={"row"} spacing={"12px"}>
              <Box component={"img"} src={"/images/logos/mossportLogo.svg"} />
              <Box
                component={"img"}
                src={"/images/logos/100mossportLogo.svg"}
              />
              <Box component={"img"} src={"/images/logos/skateLogo.svg"} />
            </Stack>
          </Stack>
          <Stack
            spacing={"35px"}
            sx={{
              alignItems: "flex-end",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Mossport",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "32px",
                textAlign: "right",
                maxWidth: "325px",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(6.42deg, #B81D1D -9.7%, #BA1F1F 35.27%, #C12424 68.14%, #CC2D2D 97.06%, #DC3939 123.71%, #DD3A3A 125.3%, #DD3A3A 125.3%, #DD3A3A 125.3%, #DD3A3A 125.3%)",
              }}
            >
              СОРЕВНОВАНИЯ ПО КОНЬКОБЕЖНОМУ СПОРТУ
            </Typography>
            <IceIcon isMobile={isMobile} />
            <Stack
              sx={{
                alignItems: "flex-end",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  backgroundImage: "url(/images/backgrounds/dateBg.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  minHeight: "53px",
                  width: "292px",
                  mr: "-50px",
                }}
              ></Box>
              <Stack
                sx={{
                  position: "absolute",
                  minHeight: "53px",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Gotham Pro Regular",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textAlign: "right",
                    color: "white",
                  }}
                >
                  4 ФЕВРАЛЯ
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Bold",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "24px",
                  textAlign: "right",
                  whiteSpace: "pre-line",
                  textTransform: "uppercase",
                  mt: "10px",
                }}
              >
                {`СК «Лужники» 
              Каток «Южный полюс»`}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            bottom: "3px",
            right: "0px",
            width: "543px",
          }}
        >
          <RegBtn isMobile={isMobile} onClick={() => {}} />
        </Box>
      </Box>
    </Container>
  ) : (
    <Box
      sx={{
        backgroundImage: "url(/images/backgrounds/mobile/cover.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "640px",
        pt: isSmaller ? "44px" : "20px",
        px: isSmaller ? "20px" : "5px",
        position: "relative",
        backgroundPositionX: "50%",
      }}
    >
      <Stack
        sx={{
          alignItems: "flex-end",
          width: "100%",
        }}
        spacing={"60px"}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Box
            component={"img"}
            src={"/images/logos/mobile/departmentLogo.svg"}
            sx={{ maxWidth: "86px", height: "43px" }}
          />
          <Box
            component={"img"}
            src={"/images/logos/mobile/mossportLogo.svg"}
            sx={{ maxWidth: "86px", height: "43px" }}
          />
          <Box
            component={"img"}
            src={"/images/logos/mobile/100mossportLogo.svg"}
            sx={{ maxWidth: "86px", height: "43px" }}
          />
          <Box
            component={"img"}
            src={"/images/logos/mobile/skateLogo.svg"}
            sx={{ maxWidth: "86px", height: "43px" }}
          />
        </Stack>
        <Stack
          direction={"row"}
          sx={{ width: "100%" }}
          justifyContent={"space-evenly"}
        >
          <Typography
            sx={{
              fontFamily: "Mossport",
              fontWeight: 400,
              fontSize: isSmaller ? "20px" : "18px",
              lineHeight: "20px",
              textAlign: "right",
              maxWidth: "171px",
              maxHeight: "40px",
              color: "white",
              mr: isSmaller ? "-15px" : "-15px",
            }}
          >
            СОРЕВНОВАНИЯ ПО КОНЬКОБЕЖНОМУ СПОРТУ
          </Typography>
          <IceIcon isMobile={isMobile} />
        </Stack>

        <Stack
          sx={{
            alignItems: "flex-end",
            position: "relative",
            pt: isSmaller ? "73px" : "100px",
          }}
        >
          <Box
            sx={{
              backgroundImage: "url(/images/backgrounds/dateBg.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "34px",
              width: "189px",
              mr: isSmaller ? "-20px" : "-5px",
            }}
          ></Box>
          <Stack
            sx={{
              position: "absolute",
              minHeight: "34px",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "20px",
                textAlign: "right",
                color: "white",
              }}
            >
              4 ФЕВРАЛЯ
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontFamily: "Gotham Pro Bold",
              fontWeight: 200,
              fontSize: "16px",
              lineHeight: "20px",
              textAlign: "right",
              whiteSpace: "pre-line",
              textTransform: "uppercase",
              mt: "20px",
            }}
          >
            {`СК «Лужники» 
              Каток «Южный полюс»`}
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          bottom: "4px",
          right: "5%",
          width: "342px",
        }}
      >
        <RegBtn isMobile={isMobile} onClick={() => {}} />
      </Box>
    </Box>
  );
};

export default Cover;
