import { NavLink } from "react-router-dom";
import "../style/Nav.scss";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <nav>
      <ul className="link__list">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
            end
            to="/"
          >
            <span>
              <Icon icon="bxs:book" />
              일별
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
            to="/month"
          >
            <span>
              <Icon icon="majesticons:moon" />
              월별
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
          >
            <span>
              <Icon icon="akar-icons:statistic-up" />
              통계
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
            to="/calendar"
          >
            <span>
              <Icon icon="ion:calendar-sharp" />
              캘린더
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
