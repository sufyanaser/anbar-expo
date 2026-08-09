import type { StructureResolver } from "sanity/structure";

const singleton = (
  S: Parameters<StructureResolver>[0],
  typeName: "eventSettings" | "liveStream",
  title: string,
) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("إدارة منصة معرض الأنبار")
    .items([
      singleton(S, "eventSettings", "إعدادات المعرض"),
      singleton(S, "liveStream", "البث المباشر"),
      S.divider(),
      S.documentTypeListItem("newsArticle").title("الأخبار"),
      S.documentTypeListItem("programEntry").title("برنامج الفعاليات"),
      S.documentTypeListItem("galleryItem").title("معرض الصور"),
      S.documentTypeListItem("exhibitor").title("دليل العارضين"),
      S.documentTypeListItem("advertisement").title("الإعلانات"),
      S.divider(),
      S.documentTypeListItem("officialEntity").title("الإطار الرسمي"),
      S.documentTypeListItem("partner").title("الشركاء والمؤسسات"),
      S.documentTypeListItem("platformModule").title("أقسام المنصة"),
      S.documentTypeListItem("managedPage").title("الصفحات التعريفية"),
    ]);
