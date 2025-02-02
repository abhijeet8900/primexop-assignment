import { MenuType } from "@/constants/menus";

const MenuItem = ({ name, link }: MenuType) => {
    return (
      <div className="relative group hover:text-blue-600">
        <li className="relative flex items-center gap-1 py-2 cursor-pointer">
          <a href={link}>{name}</a>
        </li>
      </div>
    );
  };

  export default MenuItem