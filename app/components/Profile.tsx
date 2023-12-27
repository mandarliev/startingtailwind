import Image from "next/image";

function Profile() {
  return (
    <div
      className={`flex flex-col sm:flex-row text-center sm:text-left sm:items-center sm:p-10`}
    >
      <Image
        className="cursor-pointer w-full transition duration-100 transform sm:hover:scale-110 ring-red-600 sm:rounded-full sm:w-2/5 sm:max-w-sm sm:ring-4 "
        src="https://pbs.twimg.com/profile_images/1436221153652191234/i4cAxnPv_400x400.jpg"
        alt="profile pic"
        width={200}
        height={200}
      />
      <div className="mt-5 sm:ml-5">
        <h1 className="text-5xl">Dimitar Mandarliev</h1>
        <h2 className="text-2xl">I code quite a lot...</h2>
      </div>
    </div>
  );
}

export default Profile;
