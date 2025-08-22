const Profile = () => {
  const userData = {
    name: "Pallavi Dule",
    email: "Pallavi@example.com",
    joined: "Jan 2024",
  };

  const handleDownloadData = () => {
    const blob = new Blob([JSON.stringify(userData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account deletion request submitted!");
    }
  };

  const handleUpdateDetails = () => {
    alert("Update details clicked (mock).");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-2xl shadow-md">
        {/* Top Bar for Action Buttons */}
        <div className="flex flex-row gap-4  p-4">
          <button
            onClick={handleDownloadData}
            className="hover:underline hover:text-blue-700 text-sm"
          >
            Download Data
          </button>
          <button
            onClick={handleUpdateDetails}
            className="hover:text-blue-700 hover:underline text-sm"
          >
            Update Details
          </button>
          <button
            onClick={handleDeleteAccount}
            className="hover:text-red-600 hover:underline text-sm"
          >
            Delete Account
          </button>
        </div>

        {/* Profile Content */}
        <div className="px-4">
          <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Joined:</strong> {userData.joined}</p>
        </div>
      </main>
    </div>
  );
};

export default Profile;
