insert into CARD001MB
( MKR_ID        
, DT_CREATED    
, ATH_ID        
, DT_MODIFIED   
, CARD4         
, BAL_TRNS_AMT  
, MIN_DUE_AMT   
, TTL_BAL       
, DUE_DATE      
, DUE_DAYS      
, ACCT_STATUS   
, PURCHASE_APR  
, BAL_TRANS_APR 
, BANK_ID       
, USR_ID        
, GRP_ID        
, APR_ZERO_DATE 
)
values                                                                                         
( 
  '1'              
, curdate()     
, '1'             
, curdate()     
, '3000'        
, '2900'          
, '27'            
, '2900'          
, curdate()     
, '30'            
, 'ACTIVE'      
, '23'            
, '34'            
, '1'             
, '1'             
, '1'             
, date_add(curdate() , INTERVAL 15 MONTH ) 
)




+--------+---------------------+--------+---------------------+-------+--------------+-------------+---------+---------------------+----------+-------------+--------------+---------------+---------+--------+--------+---------------------+
| MKR_ID | DT_CREATED          | ATH_ID | DT_MODIFIED         | CARD4 | BAL_TRNS_AMT | MIN_DUE_AMT | TTL_BAL | DUE_DATE            | DUE_DAYS | ACCT_STATUS | PURCHASE_APR | BAL_TRANS_APR | BANK_ID | USR_ID | GRP_ID | APR_ZERO_DATE       |
+--------+---------------------+--------+---------------------+-------+--------------+-------------+---------+---------------------+----------+-------------+--------------+---------------+---------+--------+--------+---------------------+
|      1 | 2016-01-06 00:00:00 |      1 | 2016-01-06 00:00:00 |  3000 |         2900 |          27 |    2900 | 2016-01-06 00:00:00 |       30 | ACTIVE      |           23 |            34 |       1 |      1 |      1 | 2017-04-06 00:00:00 |
+--------+---------------------+--------+---------------------+-------+--------------+-------------+---------+---------------------+----------+-------------+--------------+---------------+---------+--------+--------+---------------------+

