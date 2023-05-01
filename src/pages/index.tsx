import SingleTask from "@/components/organisms/SingleTask";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} flex flex-col gap-4 items-center justify-center h-full min-h-screen p-10`}
    >
      <SingleTask
        finishedSubTask={4}
        taskLearning={false}
        title="Redux Toolkit"
        totalSubTask={9}
        taskProgress={34}
        taskTimeLeft={80}
      />
      <SingleTask
        finishedSubTask={4}
        taskLearning={false}
        title="Redux Toolkit"
        totalSubTask={9}
        taskProgress={34}
        taskTimeLeft={80}
      />
      <SingleTask
        finishedSubTask={4}
        taskLearning={false}
        title="Redux Toolkit"
        totalSubTask={9}
        taskProgress={34}
        taskTimeLeft={80}
      />
      <SingleTask
        finishedSubTask={4}
        taskLearning={false}
        title="Redux Toolkit"
        totalSubTask={9}
        taskProgress={34}
        taskTimeLeft={80}
      />
      <SingleTask
        finishedSubTask={4}
        taskLearning={false}
        title="Redux Toolkit"
        totalSubTask={9}
        taskProgress={34}
        taskTimeLeft={80}
      />
      <SingleTask
        finishedSubTask={4}
        taskLearning={false}
        title="Redux Toolkit"
        totalSubTask={9}
        taskProgress={34}
        taskTimeLeft={80}
      />
      <SingleTask
        finishedSubTask={4}
        taskLearning={false}
        title="Redux Toolkit"
        totalSubTask={9}
        taskProgress={34}
        taskTimeLeft={80}
      />
    </main>
  );
}
