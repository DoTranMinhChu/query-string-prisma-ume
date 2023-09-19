Certainly! Here are the three utility functions (`prismaOrderByToJsonString`, `prismaSelectToJsonString`, and `prismaWhereConditionToJsonString`) with explanations in Markdown format that you can include in your README.md file:

---

# Prisma Utility Functions

This documentation provides information about three utility functions for working with Prisma queries: `prismaOrderByToJsonString`, `prismaSelectToJsonString`, and `prismaWhereConditionToJsonString`. These functions help you convert Prisma query objects into JSON strings for use in your application.

## Installation

These utility functions can be used in any TypeScript/typeScript project. To use them, follow these steps:

1. Install the required packages (Prisma may need to be installed separately):

```bash
npm install query-string-prisma-ume
```

2. Import the utility functions into your project:

```typescript
import {
  prismaOrderByToJsonString,
  prismaSelectToJsonString,
  prismaWhereConditionToJsonString,
} from "query-string-prisma-ume";
```

## Functions

### Interface for example

```typescript
// ./interfaces
interface UserResponse {
  id: string;
  dob: string;
  name: string;
  address: string;
  age: number;
  isActivated: boolean;
  posts?: Array<PostResponse>;
  comments?: Array<CommentResponse>;
}

interface PostResponse {
  id: string;
  userId: string;
  slug: string;
  title: string;
  content: string;
  date: Date;
  tags: Array<string>;
  user?: UserResponse;
  comments?: Array<CommentResponse>;
}

interface CommentResponse {
  id: string;
  userId: string;
  postId: string;
  user?: UserResponse;
  post?: PostResponse;
}
```

### 1. `prismaOrderByToJsonString`

#### Description

Converts a Prisma orderBy object to a JSON string.

#### Parameters

- `input` (type: `PrismaOrderByType`): The Prisma orderBy object to convert.

#### Example

```typescript
import {
  prismaOrderByToJsonString,
  PrismaOrderByType,
} from "query-string-prisma-ume";
import { UserResponse } from "./interfaces";

const orderBy: PrismaOrderByType<UserResponse> = {
  name: "asc",
  age: "desc",
};

const jsonString = prismaOrderByToJsonString<UserResponse>(orderBy);
console.log(jsonString); // Output: '{"name":"asc","age":"desc"}'
```

### 2. `prismaSelectToJsonString`

#### Description

Converts a Prisma select object to a JSON string.

#### Parameters

- `jsonArray` (type: `PrismaSelectType`): The Prisma select object to convert.

#### Example

```typescript
import { prismaSelectToJsonString } from "query-string-prisma-ume";
import { UserResponse } from "./interfaces";
// Define a complex Prisma select type
const complexSelect: PrismaSelectType<UserResponse> = [
  "$all", // Select all fields of UserResponse

  // Select comments with specific properties, including user details
  {
    comments: [
      "$all",
      {
        user: ["id", "name"],
      },
    ],
  },

  // Select posts with specific properties
  {
    posts: ["id", "title", "content", "tags"],
  },
];

// Convert the select type to a JSON string
const complexSelectJson = prismaSelectToJsonString<UserResponse>(complexSelect);

console.log(complexSelectJson);
```

### 3. `prismaWhereConditionToJsonString`

#### Description

Converts a Prisma where condition object to a JSON string.

#### Parameters

- `filter` (type: `PrismaWhereConditionType`): The Prisma where condition object to convert.

#### Example

```typescript
import {
  prismaWhereConditionToJsonString,
  PrismaWhereConditionType,
} from "query-string-prisma-ume";
import { UserResponse } from "./interfaces";

const filter: PrismaWhereConditionType<UserResponse> = {
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

const jsonString = prismaWhereConditionToJsonString<UserResponse>(filter);
console.log(jsonString); // Output: '{"filter":{"name":{"contains":"John","address":{"contains":"ho chi minh","mode":"insensitive"}},"age":{"gt":30}}}'
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Do Tran Minh Chu]

## Acknowledgments

- [Prisma](https://www.prisma.io/) - For the Prisma ORM that these utilities work with.

---

Feel free to replace `[Do Tran Minh Chu]` in the author section with your actual name or your project's author information. This README provides a basic structure that you can expand upon to include more details or explanations if needed.
