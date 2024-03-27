import "./App.css";

import Header from "./components/Header";
import Description from "./components/Description";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import useWindowSize from "./utils/useWindowSize";

function App() {
  const { width: windowWidth } = useWindowSize();
  console.log(windowWidth);
  const isMobile: boolean = windowWidth !== undefined && windowWidth < 768;
  // const events = [
  //   {
  //     date: "January 2022",
  //     title: "Event 1",
  //     description: "Description for Event 1",
  //   },
  //   {
  //     date: "February 2022",
  //     title: "Event 2",
  //     description: "Description for Event 2",
  //   },
  //   {
  //     date: "March 2022",
  //     title: "Event 3",
  //     description: "Description for Event 3",
  //   },
  // ];
  return (
    <div className="App mt-[10px]">
      <div className="p-[20px] fixed top-0 left-0 w-full bg-[#1b0e64] text-white p-4">
        <Header />
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:divide-x divide-[#3bc9f3]">
        <div className="basis-1/2 text-[#3bc9f3]">
          <main className="mt-16 p-8">
            {isMobile && (
              <div className="bg-[#00D100] text-[#000] font-[700] text-[20px] rounded-[8px] mb-[5px]">
                <Profile />
              </div>
            )}
            <Description />
            {/* <Timeline events={events} /> */}
          </main>
        </div>

        <div className="basis-1/2 bg-[#00D100] text-[#000] font-[700] text-[20px]">
          {!isMobile && (
            <div className="w-[100%] mt-[100px] w-[50%] ">
              <Profile />
            </div>
          )}
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
