import { Logo } from "./Logo";
import { NavLinks } from "./Navlinks";
import { Search } from "./Search";
import { SocialMediaLinks } from "./SocialMediaLinks";

export function Navbar() {
  return (
    <header className="absolute top-0  w-screen bg-black bg-opacity-20 h-[8vh] flex items-center justify-between px-[4vw]">
      <div className="font-bold">
        <Logo title="runo" color="text-[#F8F9FA]" />
      </div>

      <div className="hidden md:flex  md:flex-row md:flex-shrink-0 md:items-center gap-4 ">
        <NavLinks />
        <SocialMediaLinks />
        <Search />
      </div>
    </header>
  );
}
// /* Header */

// position: absolute;
// width: 1440px;
// height: 80px;
// left: 0px;
// top: 0px;

// /* Header BG */

// position: absolute;
// width: 1440px;
// height: 80px;
// left: 0px;
// top: 0px;

// background: rgba(0, 0, 0, 0.2);

// /* RUNO */

// position: absolute;
// width: 69px;
// height: 22px;
// left: 70px;
// top: 29px;

// font-family: 'Spartan';
// font-style: normal;
// font-weight: 700;
// font-size: 20px;
// line-height: 22px;
// display: flex;
// align-items: center;

// color: #F8F9FA;

// /* Line 2 */

// position: absolute;
// width: 33px;
// height: 0px;
// left: 866px;
// top: 53px;

// border: 2px solid #D4A373;

// /* Menus */

// position: absolute;
// width: 244px;
// height: 14px;
// left: 866px;
// top: 33px;

// /* Home */

// position: absolute;
// width: 33px;
// height: 14px;
// left: 866px;
// top: 33px;

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 700;
// font-size: 12px;
// line-height: 14px;
// /* identical to box height */
// display: flex;
// align-items: center;

// color: #FFFFFF;

// /* About */

// position: absolute;
// width: 33px;
// height: 14px;
// left: 924px;
// top: 33px;

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 700;
// font-size: 12px;
// line-height: 14px;
// /* identical to box height */
// display: flex;
// align-items: center;

// color: #E5E5E5;

// /* Articles */

// position: absolute;
// width: 43px;
// height: 14px;
// left: 982px;
// top: 33px;

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 700;
// font-size: 12px;
// line-height: 14px;
// /* identical to box height */
// display: flex;
// align-items: center;

// color: #E5E5E5;

// /* Contact Us */

// position: absolute;
// width: 60px;
// height: 14px;
// left: 1050px;
// top: 33px;

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 700;
// font-size: 12px;
// line-height: 14px;
// /* identical to box height */
// display: flex;
// align-items: center;

// color: #E5E5E5;

// /* Search Icon */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1350px;
// top: 30px;

// /* Search */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1350px;
// top: 30px;

// background: url(.png);

// /* Rectangle 1 */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1350px;
// top: 30px;

// background: #E5E5E5;

// /* Social Icons' */

// position: absolute;
// width: 172px;
// height: 20px;
// left: 1144px;
// top: 30px;

// /* facebook */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1144px;
// top: 30px;

// /* Facebook Circled */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1144px;
// top: 30px;

// background: url(.png);

// /* Rectangle 2 */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1144px;
// top: 30px;

// background: #E5E5E5;

// /* twitter */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1182px;
// top: 30px;

// /* Twitter */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1182px;
// top: 30px;

// background: url(.png);

// /* Rectangle 3 */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1182px;
// top: 30px;

// background: #E5E5E5;

// /* youtube */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1220px;
// top: 30px;

// /* YouTube Play Button */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1220px;
// top: 30px;

// background: url(.png);

// /* Rectangle 4 */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1220px;
// top: 30px;

// background: #E5E5E5;

// /* pinterest */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1258px;
// top: 30px;

// /* Pinterest */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1258px;
// top: 30px;

// background: url(.png);

// /* Rectangle 5 */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1258px;
// top: 30px;

// background: #E5E5E5;

// /* behance */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1296px;
// top: 30px;

// /* Behance */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1296px;
// top: 30px;

// background: url(.png);

// /* Rectangle 6 */

// position: absolute;
// width: 20px;
// height: 20px;
// left: 1296px;
// top: 30px;

// background: #E5E5E5;

// /* Line 8 */

// position: absolute;
// width: 20px;
// height: 0px;
// left: 1127px;
// top: 30px;

// border: 0.5px solid #E5E5E5;
// transform: rotate(90deg);

// /* Line 9 */

// position: absolute;
// width: 20px;
// height: 0px;
// left: 1333px;
// top: 30px;

// border: 0.5px solid #E5E5E5;
// transform: rotate(90deg);
