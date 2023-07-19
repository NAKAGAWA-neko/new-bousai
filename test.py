import pandas as pd

# CSVを読み込む
data = pd.read_csv("kirokuteki.csv")

# 日付をPythonのdatetimeオブジェクトに変換
data["time"] = pd.to_datetime(data["time"])

# 年だけを取り出す新しい列を作る
data["year"] = data["time"].dt.year

# 年ごとのカウント
year_counts = data["year"].value_counts().sort_index()

print(year_counts)

year_counts.to_csv("year_kirokuteki.csv")
