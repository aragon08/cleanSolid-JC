interface Bird {
  
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}
interface SwimerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Humminbird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  
  public eat() {}
  public run() {}
}

class Pinguin implements Bird, SwimerBird {
  
  public eat() {}
  public swim() {}
}