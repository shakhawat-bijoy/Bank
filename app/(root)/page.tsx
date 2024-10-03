import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Shakhawat", lastName: "Bijoy", email: "shakhawatbijoy@hotmail.com"};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={3000.74}
          />



        </header>

        RECENT TRANSACTION
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 3000.74}, {currentBalance: 3750}]}
      />  
    </section>
  );
};

export default Home;
