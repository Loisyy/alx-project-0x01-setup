import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-blue-500">{website}</p>
      <div className="mt-3 text-sm text-gray-500">
        <p>Company: {company?.name}</p>
        <p>{company?.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;