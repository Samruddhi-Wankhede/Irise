create database college;
create database if not exists college;

drop database if exists company;
use college;

create table student(
rollNo int primary key,
name varchar(50)

);

insert into student
(rollNo, name)
values
(101, "karan"),
(102, "arjun"),
(103,"ram");

insert into student values(104,"shyam");

select * from student;



-- comments in sql