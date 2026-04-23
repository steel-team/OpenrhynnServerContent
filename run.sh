
#!/bin/bash
java -XX:MaxDirectMemorySize=512M \
  -Dio.netty.allocator.pageSize=4096 \
  -Dio.netty.allocator.maxOrder=10 \
  -Dio.netty.recycler.maxCapacity=0 \
  -jar openrhynn.jar -Xmx1500m -Xms256m
