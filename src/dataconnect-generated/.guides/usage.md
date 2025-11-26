# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, getUser, updateClickCount, listRewards } from '@dataconnect/generated';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation GetUser: 
const { data } = await GetUser(dataConnect);

// Operation UpdateClickCount:  For variables, look at type UpdateClickCountVars in ../index.d.ts
const { data } = await UpdateClickCount(dataConnect, updateClickCountVars);

// Operation ListRewards: 
const { data } = await ListRewards(dataConnect);


```