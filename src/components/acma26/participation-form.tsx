import s from "@/app/ACMA26/acma26.module.css";

/** Preview only: no action, client persistence, or submission endpoint until official intake is approved. */
export function ParticipationForm() {
  return (
    <details id="form-preview" className={s.formPreview}>
      <summary>
        معاينة الحقول المعطلة
        <span aria-hidden="true">+</span>
      </summary>
      <ol className={s.steps}>
        <li>
          <strong>بيانات المشارك</strong>
          <span>الاسم ووسائل التواصل</span>
        </li>
        <li>
          <strong>تفاصيل العمل</strong>
          <span>العنوان والوصف ورابط الاطلاع</span>
        </li>
        <li>
          <strong>المراجعة والتقديم</strong>
          <span>بعد فتح باب المشاركة رسمياً</span>
        </li>
      </ol>
      <div
        id="form-preview-fields"
        className={s.form}
        aria-labelledby="form-title"
      >
        <div className={s.formHeading}>
          <h3 id="form-title">بيانات المشاركة</h3>
          <span>معاينة الحقول</span>
        </div>
        <p id="form-status">نموذج استرشادي — لا يستقبل طلبات حالياً.</p>
        <fieldset disabled aria-describedby="form-status">
          <legend>المشارك والعمل</legend>
          <div className={s.fieldGrid}>
            <label>
              الاسم الكامل
              <input autoComplete="name" placeholder="اسم المشارك" />
            </label>
            <label>
              رقم الهاتف
              <input
                type="tel"
                dir="ltr"
                autoComplete="tel"
                placeholder="07XXXXXXXXX"
              />
            </label>
            <label>
              البريد الإلكتروني
              <input
                type="email"
                dir="ltr"
                autoComplete="email"
                placeholder="name@example.com"
              />
            </label>
            <label>
              المحافظة والمدينة
              <input placeholder="المحافظة / المدينة" />
            </label>
            <label>
              صفة المشارك
              <select defaultValue="">
                <option value="">تُحدد وفق الشروط الرسمية</option>
              </select>
            </label>
            <label>
              فئة المشاركة
              <select defaultValue="">
                <option value="">المجالات الأربعة موضحة في هذه الصفحة</option>
              </select>
            </label>
            <label className={s.fullField}>
              عنوان العمل أو المبادرة
              <input placeholder="عنوان المشاركة" />
            </label>
            <label className={s.fullField}>
              وصف العمل
              <textarea
                rows={4}
                placeholder="الفكرة، دورك في التنفيذ، والأثر الذي حققه العمل"
              />
            </label>
            <label className={s.fullField}>
              رابط العمل أو ملف الأعمال
              <input type="url" dir="ltr" placeholder="https://" />
            </label>
          </div>
        </fieldset>
        <p className={s.formFootnote}>
          تفاصيل المرفقات والإقرارات وسياسة الخصوصية تُتاح مع فتح التقديم.
        </p>
        <button disabled type="button" className={s.submit}>
          التقديم غير مفتوح حالياً
        </button>
      </div>
    </details>
  );
}
