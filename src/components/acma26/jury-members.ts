export type JuryMember = {
  id: string;
  name: string;
  specialty: string;
  imageSrc: string | null;
};

export const juryMembers: JuryMember[] = [
  {
    id: "moayad-khalaf",
    name: "د. مؤيد خلف حسين",
    specialty: "التحرير الصحفي",
    imageSrc: null,
  },
  {
    id: "ahmed-hamza",
    name: "أحمد حمزة",
    specialty: "التصوير",
    imageSrc: null,
  },
  {
    id: "sufyan-nasser",
    name: "سفيان ناصر",
    specialty: "الإخراج",
    imageSrc: null,
  },
  {
    id: "anas-alani",
    name: "أنس العاني",
    specialty: "المونتاج",
    imageSrc: null,
  },
  {
    id: "abdullah-adeeb",
    name: "عبدالله أديب مجيد",
    specialty: "المونتاج",
    imageSrc: null,
  },
];
