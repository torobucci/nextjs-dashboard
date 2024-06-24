import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers,fetchCustomersPages } from "@/app/lib/data";
import Pagination from "@/app/ui/invoices/pagination";
export default  async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?:number
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const customers = await fetchFilteredCustomers(query,currentPage)
  const totalPages = await fetchCustomersPages(query)

   return <>
    <CustomersTable customers={customers||[]} />
    <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
   </>;
  }
