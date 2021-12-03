# Generated by Django 3.2.9 on 2021-12-03 11:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wins', models.PositiveIntegerField(default=0)),
                ('loses', models.PositiveIntegerField(default=0)),
                ('draws', models.PositiveIntegerField(default=0)),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='users.profile')),
            ],
        ),
    ]
