import Image from "next/image";
import { juryMembers } from "./jury-members";
import s from "@/app/ACMA26/acma26.module.css";

export function TechnicalJury() {
  return (
    <section id="jury" className={s.jurySection} aria-labelledby="jury-title">
      <div className={s.juryInner}>
        <p className={s.eyebrow}>اللجنة الفنية</p>
        <h2 id="jury-title">اللجنة الفنية لتقييم الأعمال</h2>
        <ul className={s.juryGrid}>
          {juryMembers.map((member) => (
            <li className={s.juryMember} key={member.id}>
              <div className={s.juryPortrait}>
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={480}
                    height={600}
                    sizes="(max-width: 359px) 85vw, (max-width: 639px) 42vw, (max-width: 1023px) 28vw, 230px"
                  />
                ) : (
                  <div className={s.portraitPlaceholder}>
                    <span className={s.placeholderMark} aria-hidden="true" />
                    <span>الصورة قريباً</span>
                  </div>
                )}
              </div>
              <h3>{member.name}</h3>
              <p>{member.specialty}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
