import Link from "next/link";
import Faq from "./Faq";

const faqData = [
  {
    id: 1,
    question: "直接話したいのですが、管理人は誰ですか？",
    answer:
      "直接お会いすることはできません。黒羽晟という生徒を仲介してお聞きいたします。 ",
  },
  {
    id: 2,
    question: "開発に参加したいです。足手纏いでもいいですか？",
    answer:
      "勿論です。というかこのプロジェクト自体が技術向上の手助けになるように設計されています。というかどうせやりがい搾取なので、責任なんて感じなくて大丈夫です。",
  },
  {
    id: 3,
    question: "無料ですか？",
    answer:
      "学生の懐事情なんてたかが知れてるので、特に課金関連のシステムは現状設けていません。サーバー代が高くなってきたら広告ぐらい載せるかもですが。",
  },
  {
    id: 4,
    question: "サーバーはどこにありますか？",
    answer:
      "管理人の家にオンプレミスで実装されています。なので、私が電気料金を払い忘れたらサービスが止まることになります。",
  },
  {
    id: 5,
    question: "教員用の機能はありますか？",
    answer:
      "基本的に学校関係者であれば便利な機能を実装する予定です。しかし私は学生で、なにが求められているかわからないので、必要な機能があれば連絡してください。",
  },
];
const FaQs = () => {
  return (
    <section
      id="faqs"
      className="bg-[url(/images/home/smartui-bg.png)] bg-cover bg-no-repeat py-14 xxl:py-28 bg-primary/5 dark:bg-bg3">
      <div className="container grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-6">
          <h2 className="h2 mb-4 lg:mb-6">Question and Answer</h2>
          <p className="mb-7 lg:mb-10 text-sm md:text-base">
            ６回ぐらい聞かれたことをQ&A形式でまとめました。もっと聞きたいことがあれば、ドキュメントを参照してください。
          </p>
          <Link href="https://docs.iput-kernel.com" className="btn">
            ドキュメントを見る
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-5 xxl:col-start-8">
          <Faq faqData={faqData} />
        </div>
      </div>
    </section>
  );
};

export default FaQs;
