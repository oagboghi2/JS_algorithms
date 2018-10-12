class Queue:
    def __init__(self):
        self.storage = [] # create array to be out storage

    def enqueue(self, item):
        #add item tot he end fo the queue
        self.storage.append(item)

    def dequeue(self,item):
        if(len(self.storage) > 0):
           return self.storage.pop(0)
        else:
            return None


    def length(self):
        return len(self.storage)

    

