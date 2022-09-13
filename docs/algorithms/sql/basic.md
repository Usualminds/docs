# 基础

## 选择

### 大的国家
[👉 Leetcode 链接-595](https://leetcode.cn/problems/big-countries/?envType=study-plan&id=sql-beginner)


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

### 寻找用户推荐人
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
## 排序 & 修改
### 变更性别
[👉 Leetcode 链接-627](https://leetcode.cn/problems/swap-salary/) `Salary` 表：
```sql
+-------------+----------+
| Column Name | Type     |
+-------------+----------+
| id          | int      |
| name        | varchar  |
| sex         | ENUM     |
| salary      | int      |
+-------------+----------+
```
id 是这个表的主键。
sex 这一列的值是 ENUM 类型，只能从 ('m', 'f') 中取。
本表包含公司雇员的信息。
 

请你编写一个 SQL 查询来交换所有的 'f' 和 'm' （即，将所有 'f' 变为 'm' ，反之亦然），仅使用 单个 update 语句 ，且不产生中间临时表。

注意，你必须仅使用一条 update 语句，且 不能 使用 select 语句。

:::tip 考点
sql 选择语法
:::

```sql
# case&when
update
    salary
set 
    sex = case sex
        when 'm' then 'f'
        else 'm' 
    end

# if
update
    salary
set 
    sex=if(sex='m','f','m')
```

### 删除重复的电子邮箱 ⭐⭐
[👉 Leetcode 链接-196](https://leetcode.cn/problems/delete-duplicate-emails/)

表: Person
```sql

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
```

id 是该表的主键列。
该表的每一行包含一封电子邮件。电子邮件将不包含大写字母。
 
编写一个 SQL 删除语句来 删除 所有重复的电子邮件，只保留一个 id 最小的唯一电子邮件。

以任意顺序返回结果表。（注意：仅需要写删除语句，将自动对剩余结果进行查询）

查询结果格式如下所示。
```sql
输入: 
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
输出: 
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
```
解释: `john@example.com`重复两次。我们保留最小的 `Id = 1`。

:::warning 考点
内连接
:::
```sql
delete
    p1
from
    Person p1, Person p2
where
    p1.email = p2.email and p1.id > p2.id
```

## 字符串处理函数/正则

###  修复表中的名字
[👉 Leetcode 链接-1667](https://leetcode.cn/problems/fix-names-in-a-table/)

:::tip 知识点
- `concat()` 函数连接多个字符串
- `left(str, length)` 从左开始截取字符串，`length` 是截取的长度
- `upper` & `lower` 大小写转换函数
- `substring(str,start,end)` 截取字符串，`end` 不写默认为空
:::

编写一个 `SQL` 查询来修复名字，使得只有第一个字符是大写的，其余都是小写的。

返回按 `user_id` 排序的结果表。

查询结果格式示例如下。

```sql
Users table:
+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | aLice |
| 2       | bOB   |
+---------+-------+
输出：
+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | Alice |
| 2       | Bob   |
+---------+-------+
```
:::details 题解
```sql
# Write your MySQL query statement below
select
    user_id, 
    concat(upper(left(name,1)), lower(substring(name,2))) as name
from
    Users
order by
    user_id
```
:::

### 按日期分组销售产品
[👉 Leetcode 链接-1484](https://leetcode.cn/problems/group-sold-products-by-the-date/)

编写一个 SQL 查询来查找每个日期、销售的不同产品的数量及其名称。
每个日期的销售产品名称应按词典序排列。
返回按 sell_date 排序的结果表。
查询结果格式如下例所示

```sql
输入：
Activities 表：
+------------+-------------+
| sell_date  | product     |
+------------+-------------+
| 2020-05-30 | Headphone   |
| 2020-06-01 | Pencil      |
| 2020-06-02 | Mask        |
| 2020-05-30 | Basketball  |
| 2020-06-01 | Bible       |
| 2020-06-02 | Mask        |
| 2020-05-30 | T-Shirt     |
+------------+-------------+
输出：
+------------+----------+------------------------------+
| sell_date  | num_sold | products                     |
+------------+----------+------------------------------+
| 2020-05-30 | 3        | Basketball,Headphone,T-shirt |
| 2020-06-01 | 2        | Bible,Pencil                 |
| 2020-06-02 | 1        | Mask                         |
+------------+----------+------------------------------+
``` 
:::tip 考点
count & distinct & group_concat & group by
:::
```sql
select
    sell_date,
    count(distinct product) num_sold,
    group_concat(distinct product) products
from 
    Activities
group by
    sell_date
```

### 患某种疾病的患者
[👉 Leetcode 链接-1527](https://leetcode.cn/problems/patients-with-a-condition/)

写一条 SQL 语句，查询患有 I 类糖尿病的患者 ID （patient_id）、患者姓名（patient_name）以及其患有的所有疾病代码（conditions）。I 类糖尿病的代码总是包含前缀 `DIAB1` 。

按 任意顺序 返回结果表。

查询结果格式如下示例所示。


```sql
输入：
Patients表：
+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 1          | Daniel       | YFEV COUGH   |
| 2          | Alice        |              |
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 |
| 5          | Alain        | DIAB201      |
+------------+--------------+--------------+
输出：
+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 | 
+------------+--------------+--------------+
```

:::tip 考点
正则匹配 \\s ,^ ,| ,.*
:::

```sql
select 
    * 
from
    Patients
where
    conditions rlike '^DIAB1|.*\\sDIAB1'

# anther method
select 
    * 
from
    Patients
where
    conditions like '% DIAB1%'
    or
    conditions like 'DIAB1%'
```
