import * as React from 'react';
const ErpCard = props => (
  <React.Fragment>
    <div class="main-cards">

<div class="card">
  <div class="card-inner">
    <h3>{props.title}</h3>
    <span class="material-icons-outlined">groups</span>
  </div>
  <h1>{props.totalEmp}</h1>
</div>
</div>
  </React.Fragment>
);
export default ErpCard;


// export default function OutlinedCard() {
//   return (
// //     <Box sx={{ minWidth: 275 }}>
// //       <Card variant="outlined">{card}</Card>
// //          <ErpCard title="Employee" totalEmp="500"></ErpCard> 
// //     </Box>
// //   );
// // }
