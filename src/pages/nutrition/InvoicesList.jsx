import React, { useEffect, useState } from 'react'
import NutritionHeader from '../../components/partials/Header/nutritionsheader'
import HomeFooter from '../../components/partials/Footer/footer'
import { axiosInstance } from '../../assets/js/config/api';
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';

export default function InvoicesList() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axiosInstance('/invoice/get')
                .then((res) => {
                    setData(res?.data?.data || []);
                })
                .catch((error) => {
                    toast.error(error?.message || "Something went wrong while fetching invoices.");
                })
        };

        fetchData();
    }, []);

    return (
        <>
            <NutritionHeader />
            <div className="container pt-5" style={{ marginTop: "110px" }}>
                <div>
                    <h2 className="f-rob-bol font-weight-bold text-uppercase f-30">Invoices</h2>
                    <div>
                        <div className="mt-3 editor-text">
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead className="table-secondary">
                                            <tr>
                                                <th>No.</th>
                                                <th>Invoice No</th>
                                                <th>Service/Product</th>
                                                <th>Branch Name</th>
                                                <th>Paid Amount</th>
                                                <th>Total Amount</th>
                                                <th>Purchase Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.length > 0 ? (
                                                data.map((invoice, index) => (
                                                    <tr key={invoice?._id || index}>
                                                        <td>{index + 1}</td>
                                                        <td>{invoice?.invoice_number}</td>
                                                        <td>{invoice?.branch_name}</td>
                                                        <td>{invoice?.branch_name}</td>
                                                        <td>{invoice?.paid_amount}</td>
                                                        <td>{invoice?.net_amount}</td>
                                                        <td>{new Date(invoice?.date).toLocaleDateString()}</td>
                                                        <td>
                                                            <Link to={"/invoice/" + invoice?._id} className="btn btn-sm btn-primary me-2">View</Link>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="7" className="text-center">No records found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomeFooter />
        </>
    )
}
