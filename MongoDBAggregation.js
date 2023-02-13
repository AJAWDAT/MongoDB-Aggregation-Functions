//Using the MongoDB aggregation framework in MongoDB Compass

// 1. How to use the 'group' operator to find the minimum, maximum and average ages of customers.
db.Customer_Info.aggregate( [
   {
      $group: { _id: "anyid" ,minAge:{$min:"$Age"},maxAge:{$max:"$Age"},avgAge:{$avg:"$Age"}}
   }
] )

// 2. How to use the 'match' operator to find all customers who have a Country value of United Kingdom.
db.Customer_Info.aggregate( [
   {$match: {Country:"United Kingdom"}}
] )

// 3. How to use the limit operator to find a limited number of documents. (Two documents found in the example below.)
db.Customer_Info.aggregate( [
   {$match: {Country:"United Kingdom"}},
   {$limit:2}
] )

// 4. How to use the 'skip' operator to skip the the first 'n' documents.
db.Customer_Info.aggregate( [
   {$match: {Country:"United Kingdom"}},
   {$skip:1},
   {$limit:1}
] )

// 5. How to use the 'project' operator to view only some and not all fields.
db.Customer_Info.aggregate( [
   {$project:{_id:0,Country:1,Name:1}},
   {$match: {Country:"United Kingdom"}},
] )