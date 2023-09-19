Certainly! Here are the three utility functions (`prismaOrderByToJsonString`, `prismaSelectToJsonString`, and `prismaWhereConditionToJsonString`) with explanations in Markdown format that you can include in your README.md file:

---

# Prisma Utility Functions

This documentation provides information about three utility functions for working with Prisma queries: `prismaOrderByToJsonString`, `prismaSelectToJsonString`, and `prismaWhereConditionToJsonString`. These functions help you convert Prisma query objects into JSON strings for use in your application.

## Installation

These utility functions can be used in any TypeScript/JavaScript project. To use them, follow these steps:

1. Install the required packages (Prisma may need to be installed separately):

   ```bash
   npm install query-string-prisma-ume
   ```

2. Import the utility functions into your project:

   ```javascript
   import {
     prismaOrderByToJsonString,
     prismaSelectToJsonString,
     prismaWhereConditionToJsonString,
   } from "./prisma-utils";
   ```

## Functions

### 1. `prismaOrderByToJsonString`

#### Description

Converts a Prisma orderBy object to a JSON string.

#### Parameters

- `input` (type: `PrismaOrderByType`): The Prisma orderBy object to convert.

#### Example

```javascript
const orderBy = {
  name: "asc",
  age: "desc",
};

const jsonString = prismaOrderByToJsonString(orderBy);
console.log(jsonString); // Output: '{"name":"asc","age":"desc"}'
```

### 2. `prismaSelectToJsonString`

#### Description

Converts a Prisma select object to a JSON string.

#### Parameters

- `jsonArray` (type: `PrismaSelectType`): The Prisma select object to convert.

#### Example

```javascript
const select = [
  "field1",
  "field2",
  {
    nestedField1: ["nestedField1a", "nestedField1b"],
    nestedField2: ["$all"],
  },
];

const jsonString = prismaSelectToJsonString(select);
console.log(jsonString); // Output: '["field1","field2",{"nestedField1":["nestedField1a","nestedField1b"],"nestedField2":["$all"]}]'
```

### 3. `prismaWhereConditionToJsonString`

#### Description

Converts a Prisma where condition object to a JSON string.

#### Parameters

- `filter` (type: `PrismaWhereConditionType`): The Prisma where condition object to convert.

#### Example

```javascript
const filter = {
  name: {
    contains: "John",
  },
  address: {
    contains: "ho chi minh",
    mode: "insensitive",
  },
  age: {
    gt: 30,
  },
};

const jsonString = prismaWhereConditionToJsonString(filter);
console.log(jsonString); // Output: '{"filter":{"name":{"contains":"John","address":{"contains":"ho chi minh","mode":"insensitive"}},"age":{"gt":30}}}'
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Your Name]

## Acknowledgments

- [Prisma](https://www.prisma.io/) - For the Prisma ORM that these utilities work with.

---

Feel free to replace `[Your Name]` in the author section with your actual name or your project's author information. This README provides a basic structure that you can expand upon to include more details or explanations if needed.
