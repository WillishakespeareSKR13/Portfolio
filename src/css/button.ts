import {
  backgroundColorFlat,
  backgroundColorOutline,
  ChangeBrightness,
  css,
  IsBackDark,
} from "@stacklycore/ui";

export const ButtonFlatCSS = (primaryColor: string) => css`
  padding: 10px 30px;
  ${backgroundColorFlat(primaryColor)};
  border: 2px solid ${primaryColor};
  color: ${IsBackDark(primaryColor)} !important;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600 !important;
  :hover {
    ${backgroundColorFlat(ChangeBrightness(primaryColor, -20))};
    color: ${IsBackDark(ChangeBrightness(primaryColor, -20))} !important;
    border: 2px solid ${ChangeBrightness(primaryColor, 50)};
    transform: scale(1.08);
    box-shadow: 0px 0px 10px 0px ${ChangeBrightness(primaryColor, -20)};
  }
  :active {
    opacity: 0.8;
    transform: scale(0.98);
    box-shadow: none;
  }
  transition: all 0.25s ease;
`;

export const ButtonOutlinedCSS = (primaryColor: string) => css`
  padding: 10px 30px;
  ${backgroundColorOutline(primaryColor)};
  border: 2px solid ${primaryColor};
  color: ${primaryColor} !important;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600 !important;
  :hover {
    ${backgroundColorFlat(ChangeBrightness(primaryColor, -20))};
    color: ${IsBackDark(ChangeBrightness(primaryColor, -20))} !important;
    border: 2px solid ${ChangeBrightness(primaryColor, 50)};
    transform: scale(1.08);
    box-shadow: 0px 0px 10px 0px ${ChangeBrightness(primaryColor, -20)};
  }
  :active {
    opacity: 0.8;
    transform: scale(0.98);
    box-shadow: none;
  }
  transition: all 0.25s ease;
`;
