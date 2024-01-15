"use client";
import { faker } from "@faker-js/faker";
import { Tooltip } from "react-tooltip";
import useTable from "../../utils/useTable";
import Pagination from "../shared/Pagination";
import HotelListingList from "./HotelListingList";
const tooltipStyle = {
  backgroundColor: "#3539E9",
  color: "#fff",
  borderRadius: "10px",
};
const hotelList = Array.from({ length: 24 }).map((_, i) => {
  return {
    id: i + 1,
    img: `/images/hotel-${faker.helpers.arrayElement([1, 2, 3, 4, 5])}.png`,
    title: faker.company.name(),
    rating: faker.number.float({ max: 5, min: 3, precision: 0.1 }),
    location: faker.location.city(),
    price: faker.number.int({ max: 800, min: 400 }),
    favourite: faker.datatype.boolean({ probability: 0.1 }),
  };
});

const ListViewTwo = () => {
  const {
    currentPage,
    paginate,
    tableData,
    totalPages,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    totalData,
  } = useTable(hotelList, 5);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 xxxl:gap-6 mb-4 xxl:mb-6">
        {tableData.map((item) => (
          <HotelListingList key={item.id} item={item} />
        ))}
      </div>

      {tableData.length > 0 && (
        <Pagination
          endIndex={endIndex}
          total={totalData}
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          startIndex={startIndex}
        />
      )}
      <Tooltip
        id="parking"
        style={tooltipStyle}
        offset={10}
        content="Parking"
      />
      <Tooltip
        id="restaurent"
        style={tooltipStyle}
        offset={10}
        content="Restaurent"
      />
      <Tooltip
        id="room"
        style={tooltipStyle}
        offset={10}
        content="Room Service"
      />
      <Tooltip
        id="fitness"
        style={tooltipStyle}
        offset={10}
        content="Fitness"
      />
      <Tooltip
        id="swimming"
        style={tooltipStyle}
        offset={10}
        content="Swimming"
      />
      <Tooltip
        id="laundry"
        style={tooltipStyle}
        offset={10}
        content="Laundry"
      />
      <Tooltip
        id="free"
        style={tooltipStyle}
        offset={10}
        content="Free Internet"
      />
    </div>
  );
};

export default ListViewTwo;
