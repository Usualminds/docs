# 基础

## 选择

### 大的国家
`World` 表：
```sql
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | int     |
+-------------+---------+
```
`name` 是这张表的主键。
这张表的每一行提供：国家名称、所属大陆、面积、人口和 `GDP` 值。

如果一个国家满足下述两个条件之一，则认为该国是 大国 ：

- 面积至少为 300 万平方公里（即，3000000 km2）
- 或者人口至少为 2500 万（即 25000000）

编写一个 SQL 查询以报告 大国 的国家名称、人口和面积。按任意顺序返回结果表
#### 条件查询
```plsql
select
    name, population,area 
from
    World 
where 
    area >= 3000000 or population >= 25000000
```
#### 联合查询
:::tip
数据量较大时使用
:::

```sql
select 
    name,population,area
from 
    World
where 
    area >= 3000000
union
select 
    name,population,area
from 
    World
where 
    population >= 25000000
```

## 寻找用户推荐人
[👉 Leetcode 链接-584](https://leetcode.cn/problems/find-customer-referee/)

给定表 customer ，里面保存了所有客户信息和他们的推荐人。
```plsql
+------+------+-----------+
| id   | name | referee_id|
+------+------+-----------+
|    1 | Will |      NULL |
|    2 | Jane |      NULL |
|    3 | Alex |         2 |
|    4 | Bill |      NULL |
|    5 | Zack |         1 |
|    6 | Mark |         2 |
+------+------+-----------+
```
写一个查询语句，返回一个客户列表，列表中客户的推荐人的编号都 不是 2。

对于上面的示例数据，结果为：
```sql
+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
```
:::warning 考点
`MySQL` 使用三值逻辑 —— `TRUE`, `FALSE` 和 `UNKNOWN`。任何与 `NULL` 值进行的比较都会与第三种值 `UNKNOWN` 做比较。这个“任何值”包括 `NULL` 本身！这就是为什么 `MySQL` 提供 `IS NULL` 和 `IS NOT NULL` 两种操作来对 `NULL` 特殊判断。
:::
```plsql
select
    name
from
    customer
where
    referee_id != 2
    or
    referee_id is null
```

### 从不订购的客户
[👉 Leetcode 链接-183](https://leetcode.cn/problems/customers-who-never-order/)


某网站包含两个表，Customers 表和 Orders 表。编写一个 SQL 查询，找出所有从不订购任何东西的客户。

Customers 表：
```sql
+----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
```
Orders 表：
```sql
+----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
```
例如给定上述表格，你的查询应返回：
```sql
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
```

:::warning 考点
两表联合查询 is null || not in
:::

#### not in
```sql
select 
    name as Customers
from
    Customers
where 
    id not in
(
    select
        customerId
    from 
        Orders 
)
```
#### left join
```sql
select 
    name as Customers
from
    Customers as a
left join
    Orders as b
on
    a.id = b.customerId
where
    customerId is null
```
