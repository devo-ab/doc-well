import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

export default function page({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id}></ContentDisplay>;
}
