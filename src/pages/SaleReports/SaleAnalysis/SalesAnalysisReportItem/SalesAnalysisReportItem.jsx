import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

function SalesAnalysisReportItem() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Sales date', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Category Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Barcode', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Quantity', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SALES_ANALYSIS_REPORT_ITEM.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales Date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>
                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                    <div className={cx('ml-4 flex items-center gap-1')}>
                        <input type="checkbox" /> <label className={cx('text-[13px]')}>Operations Repor</label>
                    </div>
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[480px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default SalesAnalysisReportItem;
