export type JuryMember = {
  id: string;
  name: string;
  specialty: string;
  imageSrc: string | null;
  imageWidth: number;
  imageHeight: number;
};

export const juryMembers: JuryMember[] = [
  {
    id: "moayad-khalaf",
    name: "د. مؤيد خلف حسين",
    specialty: "التحرير الصحفي",
    imageSrc: "/brand/acma26/jury/moayad-khalaf.webp",
    imageWidth: 1122,
    imageHeight: 1402,
  },
  {
    id: "ahmed-hamza",
    name: "أحمد حمزة",
    specialty: "التصوير",
    imageSrc: "/brand/acma26/jury/ahmed-hamza.webp",
    imageWidth: 1024,
    imageHeight: 1536,
  },
  {
    id: "sufyan-nasser",
    name: "سفيان ناصر",
    specialty: "الإخراج",
    imageSrc: "/brand/acma26/jury/sufyan-nasser.webp",
    imageWidth: 1122,
    imageHeight: 1402,
  },
  {
    id: "anas-alani",
    name: "أنس العاني",
    specialty: "المونتاج",
    imageSrc: "/brand/acma26/jury/anas-alani.webp",
    imageWidth: 1122,
    imageHeight: 1402,
  },
  {
    id: "abdullah-adeeb",
    name: "عبدالله أديب مجيد",
    specialty: "المونتاج",
    imageSrc: "/brand/acma26/jury/abdullah-adeeb.webp",
    imageWidth: 1122,
    imageHeight: 1402,
  },
];
