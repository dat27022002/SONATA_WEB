import {
    BsFillHousesFill,
    BsFilePostFill,
    BsFillInfoSquareFill,
    BsCalendar2MonthFill,
    BsCalendar2DayFill,
    BsCalendar2WeekFill,
} from 'react-icons/bs';
import {
    FaStore,
    FaUsers,
    FaUserEdit,
    FaReceipt,
    FaWrench,
    FaLaptopHouse,
    FaUserCog,
    FaFilePowerpoint,
    FaCalendar,
} from 'react-icons/fa';
import { FaWarehouse, FaChalkboardUser } from 'react-icons/fa6';
import { GiHamburger } from 'react-icons/gi';
import { IoIosCash } from 'react-icons/io';
import { IoReceiptOutline, IoIdCardOutline } from 'react-icons/io5';
import { RiDiscountPercentFill, RiUserSearchFill, RiMenuSearchFill } from 'react-icons/ri';
import { TbHomeSearch, TbFileReport, TbClockHour10Filled } from 'react-icons/tb';
import { VscLayoutMenubar } from 'react-icons/vsc';
import {
    MdOutlineContentPasteSearch,
    MdOutlineScreenSearchDesktop,
    MdKitchen,
    MdSoupKitchen,
    MdOutlineGroups2,
    MdRememberMe,
    MdCalendarMonth,
} from 'react-icons/md';
import { LiaReceiptSolid, LiaCcAmazonPay } from 'react-icons/lia';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { CiEdit, CiLink } from 'react-icons/ci';
import { TfiAnnouncement } from 'react-icons/tfi';
import { GrDocumentStore } from 'react-icons/gr';

const menuStructure = {
    BASICSETTINGS: {
        'Store Management': [
            { name: 'Group Management', icon: BsFillHousesFill, to: '', mark: false },
            { name: 'Store Info', icon: FaStore, to: '', mark: false },
            { name: 'Store List', icon: TbHomeSearch, to: '', mark: false },
            { name: 'Warehouse Management', icon: FaWarehouse, to: '', mark: false },
            { name: 'Cash Drawer', icon: IoIosCash, to: '', mark: false },
            { name: 'Discount', icon: RiDiscountPercentFill, to: '', mark: true },
        ],
        'Employee Management': [
            { name: 'Employee Group', icon: FaUsers, to: '', mark: false },
            { name: 'Employee Info', icon: FaUserEdit, to: '', mark: false },
            { name: 'Employee List', icon: RiUserSearchFill, to: '', mark: false },
        ],
        'Menu Management': [
            { name: 'Menu Setup', icon: VscLayoutMenubar, to: '', mark: false },
            { name: 'Item Receipt Management', icon: FaReceipt, to: '', mark: false },
            { name: 'Item Receipt Manager', icon: IoReceiptOutline, to: '', mark: false },
            { name: 'Topping Settings', icon: MdSoupKitchen, to: '', mark: false },
            { name: 'Sub Menu', icon: GiHamburger, to: '', mark: false },
            { name: 'Menu Search', icon: RiMenuSearchFill, to: '', mark: true },
            { name: 'Inventory Item Search', icon: MdOutlineContentPasteSearch, to: '', mark: false },
            { name: 'Menu-Board Management', icon: MdOutlineScreenSearchDesktop, to: '', mark: false },
            { name: 'POS Menu-Board', icon: BsFilePostFill, to: '', mark: false },
            { name: 'Category Manager', icon: FaWrench, to: '', mark: false },
            { name: 'Recipe Builder', icon: LiaReceiptSolid, to: '', mark: false },
            { name: 'Recipe Search', icon: AiOutlineFileSearch, to: '', mark: true },
            { name: 'Kitchen Memo', icon: MdKitchen, to: '', mark: false },
            { name: 'Item Management By Strore', icon: FaLaptopHouse, to: '', mark: false },
            { name: 'Change of multilingual name', icon: CiEdit, to: '', mark: false },
            { name: 'Item linked code management', icon: CiLink, to: '', mark: false },
        ],
        'POS Screen Layout': [{ name: 'Employee Group', icon: '' }],
    },
    MANAGERFUNCTION: {
        noFilter: [
            { name: 'Announcement', icon: TfiAnnouncement, to: '', mark: false },
            { name: 'Payroll', icon: LiaCcAmazonPay, to: '', mark: false },
            { name: 'Time Card', icon: IoIdCardOutline, to: '', mark: false },
            { name: 'List of information by force', icon: BsFillInfoSquareFill, to: '', mark: false },
        ],
    },
    CUSTOMER: {
        noFilter: [
            { name: 'Customer Group', icon: MdOutlineGroups2, to: '', mark: false },
            { name: 'Customer Management', icon: FaUserCog, to: '', mark: false },
            { name: 'Membership List', icon: MdRememberMe, to: '', mark: false },
            { name: 'Customer Sales Total', icon: FaChalkboardUser, to: '', mark: false },
            { name: 'Customer Detailed Sales Report', icon: TbFileReport, to: '', mark: false },
            { name: 'Point Report', icon: FaFilePowerpoint, to: '', mark: false },
        ],
    },
    OPERATIONREPORTS: {
        noFilter: [
            { name: 'Monthly Comparison', icon: MdCalendarMonth, to: '', mark: false },
            { name: 'Yearly Comparison', icon: FaCalendar, to: '', mark: false },
            { name: 'Total Category Sales By Store', icon: FaStore, to: '', mark: false },
            { name: 'Total Item Sales By Store', icon: FaStore, to: '', mark: false },
            { name: 'Total Store Sales By Category', icon: FaStore, to: '', mark: false },
            { name: 'Total Sales Summary (By Item)', icon: GrDocumentStore, to: '', mark: false },
            { name: 'Total Store Sales By Item', icon: FaStore, to: '', mark: false },
            { name: 'Total Sales Week By Item', icon: BsCalendar2WeekFill, to: '', mark: false },
            { name: 'Daily Sales By Item', icon: BsCalendar2DayFill, to: '', mark: false },
            { name: 'Total Sales Hour By Item', icon: GrDocumentStore, to: '', mark: false },
            { name: 'Total Sales Item By Week', icon: BsCalendar2WeekFill, to: '', mark: false },
            { name: 'Total Sales Item By Hour', icon: TbClockHour10Filled, to: '', mark: false },
            { name: 'Total Store Sales By Supplier', icon: FaStore, to: '', mark: false },
            { name: 'Sales amount by Store', icon: FaStore, to: '', mark: false },
            { name: 'Monthly Sales amount by Store', icon: BsCalendar2MonthFill, to: '', mark: false },
            { name: 'Store Monthly Sales amount', icon: BsCalendar2MonthFill, to: '', mark: false },
        ],
    },
};

export default menuStructure;
