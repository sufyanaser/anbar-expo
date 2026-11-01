export type JuryMember = {
  id: string;
  name: string;
  specialty: string;
  imageSrc: string | null;
  imageWidth: number;
  imageHeight: number;
  portraitScale: number;
  portraitPosition: string;
};

export const juryMembers: JuryMember[] = [
  {
    id: "moayad-khalaf",
    portraitScale: 1.5,
    portraitPosition: "50% 12%",
    name: "د. مؤيد خلف حسين",
    specialty: "التحرير الصحفي",
    imageSrc: "/brand/acma26/jury/moayad-khalaf-cutout.webp",
    imageWidth: 1122,
    imageHeight: 1402,
  },
  {
    id: "ahmed-hamza",
    portraitScale: 1.08,
    portraitPosition: "50% 7%",
    name: "أحمد حمزة",
    specialty: "التصوير",
    imageSrc: "/brand/acma26/jury/ahmed-hamza-cutout.webp",
    imageWidth: 1024,
    imageHeight: 1536,
  },
  {
    id: "sufyan-nasser",
    portraitScale: 1.24,
    portraitPosition: "50% 6%",
    name: "سفيان ناصر",
    specialty: "الإخراج",
    imageSrc: "/brand/acma26/jury/sufyan-nasser-cutout.webp",
    imageWidth: 1122,
    imageHeight: 1402,
  },
  {
    id: "anas-alani",
    portraitScale: 1.06,
    portraitPosition: "50% 8%",
    name: "أنس العاني",
    specialty: "المونتاج",
    imageSrc: "/brand/acma26/jury/anas-alani-cutout.webp",
    imageWidth: 1122,
    imageHeight: 1402,
  },
  {
    id: "abdullah-adeeb",
    portraitScale: 1.02,
    portraitPosition: "50% 9%",
    name: "عبدالله أديب مجيد",
    specialty: "المونتاج",
    imageSrc: "/brand/acma26/jury/abdullah-adeeb-cutout.webp",
    imageWidth: 1122,
    imageHeight: 1402,
  },
];
