import Profile from "./components/Profile";

export default function Home() {
  return (
    <div>
      <Profile />
      <div className="flex gap-x-5 m-5">
        <button className="btn btn--primary bg-red-500">Create new Todo</button>
        <button className="btn">Help</button>
      </div>
    </div>
  );
}
