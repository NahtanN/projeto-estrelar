export type CardDataType = {
  lang: string;
  title: string;
  description: string;
  tooltip: string;
};

export const cardData = [
  {
    lang: 'en',
    title: 'Star Project',
    description:
      'This project was build with <links>. If you liked it, consider giving it a star.',
    tooltip: 'Connect your wallet!',
  },
  {
    lang: 'pt-br',
    title: 'Projeto Estrelar',
    description:
      'O projeto foi construído utilizando <links>. Se você gostou, considere deixar a sua estrela.',
    tooltip: 'Conecte sua carteira!',
  },
  {
    lang: 'es',
    title: 'Proyecto Estrella',
    description:
      'El proyecto fue construido usando <links>. Si te gustó, considera dejar tu estrella.',
    tooltip: 'Conecta tu billetera!',
  },
];
