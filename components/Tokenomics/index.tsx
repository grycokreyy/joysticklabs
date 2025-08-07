import React from "react";

const Tokenomics = () => {
  return (
    <section
      className={
        "container v-stack lg:h-stack items-center justify-center min-h-screen pt-32 lg:space-x-32 space-y-14 lg:space-y-0"
      }
    >
      <section className={"v-stack space-y-10 max-w-4xl mx-auto"}>
        <h1 className={"h1 text-primary text-center"}>TOKENOMICS</h1>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
          The JoystickLabs Token ($JSK) has been meticulously designed to foster
          a robust and sustainable ecosystem. With a total supply of 1.5 billion
          tokens, the allocation strategy ensures balanced distribution among
          investors, team members, advisors, and community incentives,
          promoting long-term growth and engagement.
        </p>

        <div className="max-w-md mx-auto border border-primary rounded-lg p-6 bg-white shadow-md">
          <h2 className="font-semibold text-xl mb-4 text-center text-primary">Token Details</h2>
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="py-2 font-medium">Token Name:</td>
                <td className="py-2">JoystickLabs Token</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 font-medium">Symbol:</td>
                <td className="py-2">$JSK</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Total Supply:</td>
                <td className="py-2">1,500,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
          {[
            { title: "Public Sale", percent: "10%", tokens: "150,000,000", note: "100% unlocked at TGE" },
            { title: "Team", percent: "15%", tokens: "225,000,000", note: "1% monthly unlock" },
            { title: "Advisors", percent: "5%", tokens: "75,000,000", note: "1% monthly unlock" },
            { title: "Ecosystem Rewards", percent: "20%", tokens: "300,000,000", note: "1% monthly unlock" },
            { title: "Staking Rewards", percent: "15%", tokens: "225,000,000", note: "1% monthly unlock" },
            { title: "Treasury", percent: "15%", tokens: "225,000,000", note: "1% monthly unlock" },
            { title: "Marketing", percent: "10%", tokens: "150,000,000", note: "1% monthly unlock" },
            { title: "Liquidity", percent: "5%", tokens: "75,000,000", note: "10% unlocked at TGE" },
            { title: "Partners / KOLs", percent: "5%", tokens: "75,000,000", note: "1% monthly unlock" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={
                "v-stack space-y-2 p-6 border border-primary rounded-lg text-center"
              }
            >
              <h3 className={"font-semibold text-lg"}>{item.title}</h3>
              <p className={"text-2xl font-bold text-primary"}>{item.percent}</p>
              <p className={"text-sm"}>{item.tokens} tokens</p>
              <p className={"text-xs text-gray-400"}>{item.note}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Tokenomics;
