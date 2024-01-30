class NavigatorMock {
  userAgent: string;
  language: string;
  platform: string;
  languages: string[];
  geolocation: {
    getCurrentPosition: (
      success: (position: any) => void,
      error?: (error: any) => void
    ) => void;
    watchPosition: (
      success: (position: any) => void,
      error?: (error: any) => void
    ) => number;
    clearWatch: (id: number) => void;
  };

  constructor() {
    this.userAgent = 'Mozilla/5.0 (Mock)'; // Example userAgent string
    this.language = 'en-US'; // Default language
    this.platform = 'MockPlatform'; // Example platform
    this.languages = ['en-US']; // List of languages

    // Simple mock for geolocation
    this.geolocation = {
      getCurrentPosition: (success, error) => {
        // Mock position
        const position = {
          coords: {
            latitude: 37.7749,
            longitude: -122.4194
          },
          timestamp: Date.now()
        };
        success(position);
      },
      watchPosition: (success, error) => {
        const id = Math.random(); // Mock id for the watcher
        this.geolocation.getCurrentPosition(success, error);
        return id;
      },
      clearWatch: id => {
        console.log(`Clearing watch with id: ${id}`);
      }
    };
  }

  // Add methods to mimic behavior of navigator's methods if needed
}

export default NavigatorMock;
