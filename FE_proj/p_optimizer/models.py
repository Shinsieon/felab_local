from django.db import models
from django.conf import settings
from django.utils import timezone

# Create your models here.

class idx1001(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1001'
class idx1028(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1028'
class idx1034(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1034'
class idx1035(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1035'
class idx1150(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1150'
class idx1151(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1151'

class idx1152(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1152'

class idx1153(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1153'
class idx1154(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1154'
class idx1155(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1155'
class idx1156(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1156'
class idx1157(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1157'
class idx1158(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1158'
class idx1159(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1159'
class idx1160(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1160'
class idx1182(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1182'

class idx1002(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1002'
class idx1003(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1003'

class idx1004(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    date = models.DateField(db_column='date')
    price = models.FloatField(db_column='price')

    class Meta:
        managed=False
        db_table = 'idx1004'

class idx_name(models.Model):
    idx = models.CharField(db_column='idx', primary_key=True, max_length=10)
    name = models.CharField(db_column='name', max_length=20)
    registered=models.DateField(db_column='registered')

    class Meta:
        managed=False
        db_table ='idx_name'

class klips_data2(models.Model):
    hhid = models.FloatField(db_column='hhid', primary_key=True)
    labor_income = models.FloatField(db_column='labor income')
    i0101 = models.IntegerField(db_column='0101')
    i0110 = models.IntegerField(db_column='0110')
    i0107 = models.IntegerField(db_column='0107')
    i5501 = models.IntegerField(db_column='5501')
    jobtype = models.CharField(db_column='jobtype', max_length=10)
    i0330 = models.IntegerField(db_column='0330')
    i0150 = models.IntegerField(db_column='0150')
    i1406 = models.IntegerField(db_column='1406')
    pickle_num = models.CharField(db_column='pickle_num', max_length= 2)

    class Meta:
        managed=False
        db_table ='klips_data2'

class kospi_return(models.Model):
    SymbolName=models.IntegerField(db_column='Symbol Name', primary_key=True)
    kospi=models.FloatField(db_column='kospi')
    
    class Meta:
        managed=False
        db_table ='kospi_return'
    
