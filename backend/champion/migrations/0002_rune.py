# Generated by Django 2.2.16 on 2020-10-05 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('champion', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rune',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primary', models.IntegerField()),
                ('primary1', models.IntegerField()),
                ('primary2', models.IntegerField()),
                ('primary3', models.IntegerField()),
                ('primary4', models.IntegerField()),
                ('sub', models.IntegerField()),
                ('sub1', models.IntegerField()),
                ('sub2', models.IntegerField()),
                ('stat1', models.IntegerField()),
                ('stat2', models.IntegerField()),
                ('stat3', models.IntegerField()),
            ],
        ),
    ]
