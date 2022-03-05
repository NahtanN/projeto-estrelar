import { enStarProject, ptbrStarProject, esStartProject } from ".";
import { ContracType } from "../@Types";

export type CardDataType = {
  lang: string;
  title: string;
  description: string;
  tooltip: string;
  contract: string;
  contractJson: any;
};

export const cardData = [
  {
    lang: "en",
    title: "Star Project",
    description:
      "This project was build with <links>. If you liked it, consider giving it a star.",
    tooltip: "Connect your wallet!",
    contract: "0xFf7f4a38B67974232ED8d04Cee21bAEf46ae533c",
    contractJson: enStarProject,
  },
  {
    lang: "pt-br",
    title: "Projeto Estrelar",
    description:
      "O projeto foi construído utilizando <links>. Se você gostou, considere deixar a sua estrela.",
    tooltip: "Conecte sua carteira!",
    contract: "0xB544e28a1B78476Cf6818a9DF322B9771441BEF8",
    contractJson: ptbrStarProject,
  },
  {
    lang: "es",
    title: "Proyecto Estrella",
    description:
      "El proyecto fue construido usando <links>. Si te gustó, considera dejar tu estrella.",
    tooltip: "Conecta tu billetera!",
    contract: "0x968d602f2F02a111944eE1a5b85ca9e3b9Aa0c37",
    contractJson: esStartProject,
  },
];
