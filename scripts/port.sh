# 从80端口开始，判断哪个端口没被占用
base_port=80
check_port=`lsof -i:$base_port | awk '{print $2}' | awk 'NR==2{print}'`
while [[ $check_port != '' ]]
do
  let base_port=base_port+1
  check_port=`lsof -i:$base_port`
done
echo "未占用的端口号：$base_port";