import nameMap from './nameMap';

const { itemLevel1, itemLevel3 } = nameMap;

const pathBasicSettings = itemLevel1.BASICSETTINGS.pathKey;
const pathManagerFunction = itemLevel1.MANAGERFUNCTION.pathKey;
const pathCustomer = itemLevel1.CUSTOMER.pathKey;
const pathOperationReports = itemLevel1.OPERATIONREPORTS.pathKey;
const pathSaleReports = itemLevel1.SALEREPORTS.pathKey;
const pathPurchaseOrder = itemLevel1.PURCHASEORDER.pathKey;
const pathSettings = itemLevel1.SETTINGS.pathKey;
const pathBIZSMS = itemLevel1.BIZSMS.pathKey;

const routes = {
    LOGIN: '/login',
    HOME: '/',
    WEBLOGIN: '/WebLogin',
    BOOKMARK: '/Bookmark',
    BasicSettings: {
        BASICSETTINGS: `/${pathBasicSettings}`,
        GROUP_MANAGEMENT: `/${pathBasicSettings}/${itemLevel3.GROUP_MANAGEMENT.pathKey}`,
        STORE_INFO: `/${pathBasicSettings}/${itemLevel3.STORE_INFO.pathKey}`,
        STORE_LIST: `/${pathBasicSettings}/${itemLevel3.STORE_LIST.pathKey}`,
        WAREHOUSE_MANAGEMENT: `/${pathBasicSettings}/${itemLevel3.WAREHOUSE_MANAGEMENT.pathKey}`,
        CASH_DRAWER: `/${pathBasicSettings}/${itemLevel3.CASH_DRAWER.pathKey}`,
        DISCOUNT: `/${pathBasicSettings}/${itemLevel3.DISCOUNT.pathKey}`,
        EMPLOYEE_GROUP: `/${pathBasicSettings}/${itemLevel3.EMPLOYEE_GROUP.pathKey}`,
        EMPLOYEE_INFO: `/${pathBasicSettings}/${itemLevel3.EMPLOYEE_INFO.pathKey}`,
        EMPLOYEE_LIST: `/${pathBasicSettings}/${itemLevel3.EMPLOYEE_LIST.pathKey}`,
        MENU_SETUP: `/${pathBasicSettings}/${itemLevel3.MENU_SETUP.pathKey}`,
        ITEM_RECEIPT_MANAGEMENT: `/${pathBasicSettings}/${itemLevel3.ITEM_RECEIPT_MANAGEMENT.pathKey}`,
        ITEM_RECEIPT_MANAGER: `/${pathBasicSettings}/${itemLevel3.ITEM_RECEIPT_MANAGER.pathKey}`,
        TOPPING_SETTINGS: `/${pathBasicSettings}/${itemLevel3.TOPPING_SETTINGS.pathKey}`,
        SUB_MENU: `/${pathBasicSettings}/${itemLevel3.SUB_MENU.pathKey}`,
        MENU_SEARCH: `/${pathBasicSettings}/${itemLevel3.MENU_SEARCH.pathKey}`,
        INVENTORY_ITEM_SEARCH: `/${pathBasicSettings}/${itemLevel3.INVENTORY_ITEM_SEARCH.pathKey}`,
        MENU_BOARD_MANAGEMENT: `/${pathBasicSettings}/${itemLevel3.MENU_BOARD_MANAGEMENT.pathKey}`,
        POS_MENU_BOARD: `/${pathBasicSettings}/${itemLevel3.POS_MENU_BOARD.pathKey}`,
        CATEGORY_MANAGER: `/${pathBasicSettings}/${itemLevel3.CATEGORY_MANAGER.pathKey}`,
        RECIPE_BUILDER: `/${pathBasicSettings}/${itemLevel3.RECIPE_BUILDER.pathKey}`,
        RECIPE_SEARCH: `/${pathBasicSettings}/${itemLevel3.RECIPE_SEARCH.pathKey}`,
        KITCHEN_MEMO: `/${pathBasicSettings}/${itemLevel3.KITCHEN_MEMO.pathKey}`,
        ITEM_MANAGEMENT_BY_STRORE: `/${pathBasicSettings}/${itemLevel3.ITEM_MANAGEMENT_BY_STRORE.pathKey}`,
        CHANGE_OF_MULTILINGUAL_NAME: `/${pathBasicSettings}/${itemLevel3.CHANGE_OF_MULTILINGUAL_NAME.pathKey}`,
        ITEM_LINKED_CODE_MANAGEMENT: `/${pathBasicSettings}/${itemLevel3.ITEM_LINKED_CODE_MANAGEMENT.pathKey}`,
        MAIN_MENU_SETTING: `/${pathBasicSettings}/${itemLevel3.MAIN_MENU_SETTING.pathKey}`,
        TABLE_LOCATION_MANAGER: `/${pathBasicSettings}/${itemLevel3.TABLE_LOCATION_MANAGER.pathKey}`,
        TABLE_DESIGN_SETTING: `/${pathBasicSettings}/${itemLevel3.TABLE_DESIGN_SETTING.pathKey}`,
        MENU_SETUP2: `/${pathBasicSettings}/${itemLevel3.MENU_SETUP2.pathKey}`,
        POS_FAVORITE_FUNCTION_BUTTON: `/${pathBasicSettings}/${itemLevel3.POS_FAVORITE_FUNCTION_BUTTON.pathKey}`,
        PAYMENT_BUTTON_SETTING: `/${pathBasicSettings}/${itemLevel3.PAYMENT_BUTTON_SETTING.pathKey}`,
        KIOSK_IMAGE_SETTINGS: `/${pathBasicSettings}/${itemLevel3.KIOSK_IMAGE_SETTINGS.pathKey}`,
        UP_ORDER_IMAGE_SETTINGS: `/${pathBasicSettings}/${itemLevel3.UP_ORDER_IMAGE_SETTINGS.pathKey}`,
        KIOSK_FUNCTION_SETTING: `/${pathBasicSettings}/${itemLevel3.KIOSK_FUNCTION_SETTING.pathKey}`,
        POS_USER_DEFINITION_LANGUAGE: `/${pathBasicSettings}/${itemLevel3.POS_USER_DEFINITION_LANGUAGE.pathKey}`,
    },
    ManagerFunction: {
        MANAGERFUNCTION: `/${pathManagerFunction}`,
        ANNOUNCEMENT: `/${pathManagerFunction}/${itemLevel3.ANNOUNCEMENT.pathKey}`,
        PAYROLL: `/${pathManagerFunction}/${itemLevel3.PAYROLL.pathKey}`,
        TIME_CARD: `/${pathManagerFunction}/${itemLevel3.TIME_CARD.pathKey}`,
        LIST_OF_INFORMATION_BY_FORCE: `/${pathManagerFunction}/${itemLevel3.LIST_OF_INFORMATION_BY_FORCE.pathKey}`,
    },
    Customer: {
        CUSTOMER: `/${pathCustomer}`,
        CUSTOMER_GROUP: `/${pathCustomer}/${itemLevel3.CUSTOMER_GROUP.pathKey}`,
        CUSTOMER_MANAGEMENT: `/${pathCustomer}/${itemLevel3.CUSTOMER_MANAGEMENT.pathKey}`,
        MEMBERSHIP_LIST: `/${pathCustomer}/${itemLevel3.MEMBERSHIP_LIST.pathKey}`,
        CUSTOMER_SALES_TOTAL: `/${pathCustomer}/${itemLevel3.CUSTOMER_SALES_TOTAL.pathKey}`,
        CUSTOMER_DETAILED_SALES_REPORT: `/${pathCustomer}/${itemLevel3.CUSTOMER_DETAILED_SALES_REPORT.pathKey}`,
        POINT_REPORT: `/${pathCustomer}/${itemLevel3.POINT_REPORT.pathKey}`,
    },
    OperationReports: {
        OPERATIONREPORTS: `/${itemLevel1.OPERATIONREPORTS.pathKey}`,
        MONTHLY_COMPARISON: `/${pathOperationReports}/${itemLevel3.MONTHLY_COMPARISON.pathKey}`,
        YEARLY_COMPARISON: `/${pathOperationReports}/${itemLevel3.YEARLY_COMPARISON.pathKey}`,
        TOTAL_CATEGORY_SALES_BY_STORE: `/${pathOperationReports}/${itemLevel3.TOTAL_CATEGORY_SALES_BY_STORE.pathKey}`,
        TOTAL_ITEM_SALES_BY_STORE: `/${pathOperationReports}/${itemLevel3.TOTAL_ITEM_SALES_BY_STORE.pathKey}`,
        TOTAL_STORE_SALES_BY_CATEGORY: `/${pathOperationReports}/${itemLevel3.TOTAL_STORE_SALES_BY_CATEGORY.pathKey}`,
        TOTAL_SALES_SUMMARY_BY_ITEM: `/${pathOperationReports}/${itemLevel3.TOTAL_SALES_SUMMARY_BY_ITEM.pathKey}`,
        TOTAL_STORE_SALES_BY_ITEM: `/${pathOperationReports}/${itemLevel3.TOTAL_STORE_SALES_BY_ITEM.pathKey}`,
        TOTAL_SALES_WEEK_BY_ITEM: `/${pathOperationReports}/${itemLevel3.TOTAL_SALES_WEEK_BY_ITEM.pathKey}`,
        DAILY_SALES_BY_ITEM: `/${pathOperationReports}/${itemLevel3.DAILY_SALES_BY_ITEM.pathKey}`,
        TOTAL_SALES_HOUR_BY_ITEM: `/${pathOperationReports}/${itemLevel3.TOTAL_SALES_HOUR_BY_ITEM.pathKey}`,
        TOTAL_SALES_ITEM_BY_WEEK: `/${pathOperationReports}/${itemLevel3.TOTAL_SALES_ITEM_BY_WEEK.pathKey}`,
        TOTAL_SALES_ITEM_BY_HOUR: `/${pathOperationReports}/${itemLevel3.TOTAL_SALES_ITEM_BY_HOUR.pathKey}`,
        TOTAL_STORE_SALES_BY_SUPPLIER: `/${pathOperationReports}/${itemLevel3.TOTAL_STORE_SALES_BY_SUPPLIER.pathKey}`,
        SALES_AMOUNT_BY_STORE: `/${pathOperationReports}/${itemLevel3.SALES_AMOUNT_BY_STORE.pathKey}`,
        MONTHLY_SALES_AMOUNT_BY_STORE: `/${pathOperationReports}/${itemLevel3.MONTHLY_SALES_AMOUNT_BY_STORE.pathKey}`,
        STORE_MONTHLY_SALES_AMOUNT: `/${pathOperationReports}/${itemLevel3.STORE_MONTHLY_SALES_AMOUNT.pathKey}`,
    },
    SaleReports: {
        SALEREPORTS: `/${pathSaleReports}`,
        DAILY_SALES_REPORT: `/${pathSaleReports}/${itemLevel3.DAILY_SALES_REPORT.pathKey}`,
        DAILY_SALES_SUMMARY: `/${pathSaleReports}/${itemLevel3.DAILY_SALES_SUMMARY.pathKey}`,
        SALES_SUMMARY: `/${pathSaleReports}/${itemLevel3.SALES_SUMMARY.pathKey}`,
        DETAILED_SALES_LIST: `/${pathSaleReports}/${itemLevel3.DETAILED_SALES_LIST.pathKey}`,
        SALES_BY_RECEIPT: `/${pathSaleReports}/${itemLevel3.SALES_BY_RECEIPT.pathKey}`,
        SALES_BY_RECEIPT_DETAIL: `/${pathSaleReports}/${itemLevel3.SALES_BY_RECEIPT_DETAIL.pathKey}`,
        CASH_RECEIPT_APPROVAL_CANCELATION_REPORT: `/${pathSaleReports}/${itemLevel3.CASH_RECEIPT_APPROVAL_CANCELATION_REPORT.pathKey}`,
        CREDIT_CARD_APPROVAL_CANCELATION_REPORT: `/${pathSaleReports}/${itemLevel3.CREDIT_CARD_APPROVAL_CANCELATION_REPORT.pathKey}`,
        SALES_REPORT_BY_CARD_TYPE_DETAIL: `/${pathSaleReports}/${itemLevel3.SALES_REPORT_BY_CARD_TYPE_DETAIL.pathKey}`,
        SALES_RECORD_BY_EMPLOYEE: `/${pathSaleReports}/${itemLevel3.SALES_RECORD_BY_EMPLOYEE.pathKey}`,
        SALES_RECORD_BY_EMPLOYEE_DATE: `/${pathSaleReports}/${itemLevel3.SALES_RECORD_BY_EMPLOYEE_DATE.pathKey}`,
        EMPLOYEE_COMMISSION: `/${pathSaleReports}/${itemLevel3.EMPLOYEE_COMMISSION.pathKey}`,
        TOTAL_SALES_REPORT: `/${pathSaleReports}/${itemLevel3.TOTAL_SALES_REPORT.pathKey}`,
        SIMPLIFIED_SALES_TOTAL: `/${pathSaleReports}/${itemLevel3.SIMPLIFIED_SALES_TOTAL.pathKey}`,
        AGGREGATE_REVENUE_ITEMS_BY_CATEGORY: `/${pathSaleReports}/${itemLevel3.AGGREGATE_REVENUE_ITEMS_BY_CATEGORY.pathKey}`,
        HOURLY_SALES: `/${pathSaleReports}/${itemLevel3.HOURLY_SALES.pathKey}`,
        TIME_OF_DAY_SALES_REPORT: `/${pathSaleReports}/${itemLevel3.TIME_OF_DAY_SALES_REPORT.pathKey}`,
        SALES_REPORT_BY_PAYMENT_TYPE: `/${pathSaleReports}/${itemLevel3.SALES_REPORT_BY_PAYMENT_TYPE.pathKey}`,
        SALES_REPORT_BY_CARD_TYPE: `/${pathSaleReports}/${itemLevel3.SALES_REPORT_BY_CARD_TYPE.pathKey}`,
        SALES_RANKING: `/${pathSaleReports}/${itemLevel3.SALES_RANKING.pathKey}`,
        SALES_ANALYSIS_REPORT_ITEM: `/${pathSaleReports}/${itemLevel3.SALES_ANALYSIS_REPORT_ITEM.pathKey}`,
        EMPLOYEE_SALES_ANALYSIS: `/${pathSaleReports}/${itemLevel3.EMPLOYEE_SALES_ANALYSIS.pathKey}`,
        ORDER_CANCELATION_REPORT: `/${pathSaleReports}/${itemLevel3.ORDER_CANCELATION_REPORT.pathKey}`,
        VOID_SUMMARY: `/${pathSaleReports}/${itemLevel3.VOID_SUMMARY.pathKey}`,
        VOID_DETAIL: `/${pathSaleReports}/${itemLevel3.VOID_DETAIL.pathKey}`,
        SALES_DISCOUNT_REPORT: `/${pathSaleReports}/${itemLevel3.SALES_DISCOUNT_REPORT.pathKey}`,
        SALES_DISCOUNT_SUMMARY: `/${pathSaleReports}/${itemLevel3.SALES_DISCOUNT_SUMMARY.pathKey}`,
        NO_TAX_SALE_REPORT: `/${pathSaleReports}/${itemLevel3.NO_TAX_SALE_REPORT.pathKey}`,
        TAX_DETAIL: `/${pathSaleReports}/${itemLevel3.TAX_DETAIL.pathKey}`,
        TAX_SUMMARY: `/${pathSaleReports}/${itemLevel3.TAX_SUMMARY.pathKey}`,
        SALES_CASH_IN_OUT: `/${pathSaleReports}/${itemLevel3.SALES_CASH_IN_OUT.pathKey}`,
        CASH_IN_OUT: `/${pathSaleReports}/${itemLevel3.CASH_IN_OUT.pathKey}`,
    },
    PurchaseOrder: {
        PURCHASEORDER: `/${pathPurchaseOrder}`,
        INVENTORY_LOOK_UP: `/${pathPurchaseOrder}/${itemLevel3.INVENTORY_LOOK_UP.pathKey}`,
        INVENTORY_ADJUSTMENTS: `/${pathPurchaseOrder}/${itemLevel3.INVENTORY_ADJUSTMENTS.pathKey}`,
        INVENTORY_TRANSFER: `/${pathPurchaseOrder}/${itemLevel3.INVENTORY_TRANSFER.pathKey}`,
        IV_MANAGEMENT_TABLE: `/${pathPurchaseOrder}/${itemLevel3.IV_MANAGEMENT_TABLE.pathKey}`,
        CUSTOMER_PURCHASE: `/${pathPurchaseOrder}/${itemLevel3.CUSTOMER_PURCHASE.pathKey}`,
        CUSTOMER_SALE_B: `/${pathPurchaseOrder}/${itemLevel3.CUSTOMER_SALE_B.pathKey}`,
        SUPPLIER_LEDGER: `/${pathPurchaseOrder}/${itemLevel3.SUPPLIER_LEDGER.pathKey}`,
        CUSTOMER_LEDGER: `/${pathPurchaseOrder}/${itemLevel3.CUSTOMER_LEDGER.pathKey}`,
        PAYABLE_REPORT: `/${pathPurchaseOrder}/${itemLevel3.PAYABLE_REPORT.pathKey}`,
        RECEIVABLE_REPORT: `/${pathPurchaseOrder}/${itemLevel3.RECEIVABLE_REPORT.pathKey}`,
        SUPPLIER_SETTING: `/${pathPurchaseOrder}/${itemLevel3.SUPPLIER_SETTING.pathKey}`,
        AMOUNT: `/${pathPurchaseOrder}/${itemLevel3.AMOUNT.pathKey}`,
    },
    Settings: {
        SETTINGS: `/${pathSettings}`,
        STORE_OPERATIONS: `/${pathSettings}/${itemLevel3.STORE_OPERATIONS.pathKey}`,
        STORE_DETAIL_SETTING: `/${pathSettings}/${itemLevel3.STORE_DETAIL_SETTING.pathKey}`,
        CASH_DRAWER2: `/${pathSettings}/${itemLevel3.CASH_DRAWER2.pathKey}`,
        TAX: `/${pathSettings}/${itemLevel3.TAX.pathKey}`,
        OPERATIONS_MANAGEMENT: `/${pathSettings}/${itemLevel3.OPERATIONS_MANAGEMENT.pathKey}`,
        ORDER_POS_CANCEL_FUNCTION_OPTION: `/${pathSettings}/${itemLevel3.ORDER_POS_CANCEL_FUNCTION_OPTION.pathKey}`,
        PRINTER_LANGUAGE_SETTING: `/${pathSettings}/${itemLevel3.PRINTER_LANGUAGE_SETTING.pathKey}`,
        AUTO_CLOSE_POPUP_OPTION: `/${pathSettings}/${itemLevel3.AUTO_CLOSE_POPUP_OPTION.pathKey}`,
        POS_INFORMATION: `/${pathSettings}/${itemLevel3.POS_INFORMATION.pathKey}`,
        PRINTER_SETTING: `/${pathSettings}/${itemLevel3.PRINTER_SETTING.pathKey}`,
        LABEL_PRINT_SETTING: `/${pathSettings}/${itemLevel3.LABEL_PRINT_SETTING.pathKey}`,
        GUEST_PAGER: `/${pathSettings}/${itemLevel3.GUEST_PAGER.pathKey}`,
        POS_DISPLAY_SETTING: `/${pathSettings}/${itemLevel3.POS_DISPLAY_SETTING.pathKey}`,
        CID_DEVICE: `/${pathSettings}/${itemLevel3.CID_DEVICE.pathKey}`,
        PRINT_OPTION_BY_POS: `/${pathSettings}/${itemLevel3.PRINT_OPTION_BY_POS.pathKey}`,
        WINDOWS_KIOSK_OPTIONS: `/${pathSettings}/${itemLevel3.WINDOWS_KIOSK_OPTIONS.pathKey}`,
        MSR_SETTING: `/${pathSettings}/${itemLevel3.MSR_SETTING.pathKey}`,
        MSR_PORT_SETTING: `/${pathSettings}/${itemLevel3.MSR_PORT_SETTING.pathKey}`,
        ECR_SETTING: `/${pathSettings}/${itemLevel3.ECR_SETTING.pathKey}`,
        STOREINFO_TAX_RECEIPT: `/${pathSettings}/${itemLevel3.STOREINFO_TAX_RECEIPT.pathKey}`,
        SETTING_QR_CODE: `/${pathSettings}/${itemLevel3.SETTING_QR_CODE.pathKey}`,
        SHOW_ADDITIONAL_DATA_IN_EOD_PRINTOUT: `/${pathSettings}/${itemLevel3.SHOW_ADDITIONAL_DATA_IN_EOD_PRINTOUT.pathKey}`,
        ONE_TOUCH_OPTION: `/${pathSettings}/${itemLevel3.ONE_TOUCH_OPTION.pathKey}`,
        BARCODE_UNREGISTERED_ITEM_OPTION: `/${pathSettings}/${itemLevel3.BARCODE_UNREGISTERED_ITEM_OPTION.pathKey}`,
        CALLER_IDENTIFICATION_RECEIVE_ACTION: `/${pathSettings}/${itemLevel3.CALLER_IDENTIFICATION_RECEIVE_ACTION.pathKey}`,
        CASH_DRAWER_OPEN_OPTION: `/${pathSettings}/${itemLevel3.CASH_DRAWER_OPEN_OPTION.pathKey}`,
        CLEAR_TABLE_SETTING: `/${pathSettings}/${itemLevel3.CLEAR_TABLE_SETTING.pathKey}`,
        ENTER_NUMBER_OF_CUSTOMER_SETTING: `/${pathSettings}/${itemLevel3.ENTER_NUMBER_OF_CUSTOMER_SETTING.pathKey}`,
        SELECT_EMPLOYEE_SETTING: `/${pathSettings}/${itemLevel3.SELECT_EMPLOYEE_SETTING.pathKey}`,
        DISCOUNT_ORDER_OPTION: `/${pathSettings}/${itemLevel3.DISCOUNT_ORDER_OPTION.pathKey}`,
        SHOW_ITEM_BARCODE_OPTION: `/${pathSettings}/${itemLevel3.SHOW_ITEM_BARCODE_OPTION.pathKey}`,
        REBATE_ISSUE: `/${pathSettings}/${itemLevel3.REBATE_ISSUE.pathKey}`,
        WEIGHT_BARCODE_OPTION: `/${pathSettings}/${itemLevel3.WEIGHT_BARCODE_OPTION.pathKey}`,
        TENDER_METHOD_WHEN_MAKING_REFUND_RECEIPT: `/${pathSettings}/${itemLevel3.TENDER_METHOD_WHEN_MAKING_REFUND_RECEIPT.pathKey}`,
        AMCASH_DRAWER_OPEN_TIMINGOUNT: `/${pathSettings}/${itemLevel3.CASH_DRAWER_OPEN_TIMING.pathKey}`,
        PREPAYMENT_FUNCTION_BUTTON_SETTING: `/${pathSettings}/${itemLevel3.PREPAYMENT_FUNCTION_BUTTON_SETTING.pathKey}`,
        PREPAID_ORDER_RETENTION_OPTIONS: `/${pathSettings}/${itemLevel3.PREPAID_ORDER_RETENTION_OPTIONS.pathKey}`,
        DELIVERY_SETTINGS: `/${pathSettings}/${itemLevel3.DELIVERY_SETTINGS.pathKey}`,
        DELIVERY_ORDER: `/${pathSettings}/${itemLevel3.DELIVERY_ORDER.pathKey}`,
        CHANGE_WEIGHT_CONTROL: `/${pathSettings}/${itemLevel3.CHANGE_WEIGHT_CONTROL.pathKey}`,
        DISCOUNT_OPTION: `/${pathSettings}/${itemLevel3.DISCOUNT_OPTION.pathKey}`,
        PAYMENT_OPTIONS_IMMEDIATELY: `/${pathSettings}/${itemLevel3.PAYMENT_OPTIONS_IMMEDIATELY.pathKey}`,
        NOTICE_POPUP_OPTION: `/${pathSettings}/${itemLevel3.NOTICE_POPUP_OPTION.pathKey}`,
        SET_ALL_CANCELLATION_TYPE: `/${pathSettings}/${itemLevel3.SET_ALL_CANCELLATION_TYPE.pathKey}`,
        CURRENCY_CHANGE_OPTION: `/${pathSettings}/${itemLevel3.CURRENCY_CHANGE_OPTION.pathKey}`,
        ENABLE_KEEP_UNIT_CHANGE: `/${pathSettings}/${itemLevel3.ENABLE_KEEP_UNIT_CHANGE.pathKey}`,
        RECEIPT: `/${pathSettings}/${itemLevel3.RECEIPT.pathKey}`,
        CUSTOMER_ORDER_PRINT: `/${pathSettings}/${itemLevel3.CUSTOMER_ORDER_PRINT.pathKey}`,
        KITCHEN_ORDER_PRINT: `/${pathSettings}/${itemLevel3.KITCHEN_ORDER_PRINT.pathKey}`,
        WAITING_LIST_TAG: `/${pathSettings}/${itemLevel3.WAITING_LIST_TAG.pathKey}`,
        USE_SECURITY_FUNCTION_BY_TASKS: `/${pathSettings}/${itemLevel3.USE_SECURITY_FUNCTION_BY_TASKS.pathKey}`,
        SECURITY_GROUP: `/${pathSettings}/${itemLevel3.SECURITY_GROUP.pathKey}`,
        EMAIL_SERVER: `/${pathSettings}/${itemLevel3.EMAIL_SERVER.pathKey}`,
    },
    BIZSMS: {
        BIZSMS: `/${pathBIZSMS}`,
        BIZ_SMS_SETTING: `/${pathBIZSMS}/${itemLevel3.BIZ_SMS_SETTING.pathKey}`,
        USER_GUIDE: `/${pathBIZSMS}/${itemLevel3.USER_GUIDE.pathKey}`,
    },
};

export default routes;
