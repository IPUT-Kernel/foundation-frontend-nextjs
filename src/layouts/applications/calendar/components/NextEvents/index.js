// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DefaultItem from "examples/Items/DefaultItem";

const events = [
  {
    color: "info",
    icon: "school",
    title: "キャリアガイダンス",
    description: "2023年6月20日, 10:00 AM",
  },
  {
    color: "info",
    icon: "group",
    title: "マリトッツォサークル",
    description: "2023年6月21日, 10:00 AM",
  },
];

function NextEvents() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          イベント
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        {/* .map()関数を使用して、events配列内の各オブジェクトをDefaultItemに変換 */}
        {events.map((event, index) => (
          <MDBox key={index} mt={index !== 0 ? 3.5 : 0}>
            <DefaultItem
              color={event.color}
              icon={event.icon}
              title={event.title}
              description={event.description}
            />
          </MDBox>
        ))}
      </MDBox>
    </Card>
  );
}

export default NextEvents;