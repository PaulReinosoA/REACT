import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Search, Filter, SortAsc, Grid, Plus } from 'lucide-react';
import { useRef } from 'react';
import { useSearchParams } from 'react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { MainCatalogData } from '@/data/mainCatalog.data';

export const SearchControls = () => {
  const { Categories, Universe, Status, Teams } = MainCatalogData;

  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const activeAcordion = searchParams.get('active-acordion') ?? '';
  const selectedStrength = Number(searchParams.get('strength') ?? '0');

  const teamsValue = searchParams.get('team') ?? '';
  const categoryValue = searchParams.get('category') ?? '';
  const universeValue = searchParams.get('universe') ?? '';
  const statusValue = searchParams.get('status') ?? '';

  const [openTeams, setOpenTeams] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openStatus, setOpenStatus] = React.useState(false);
  const [openUniverse, setOpenUniverse] = React.useState(false);

  const setQueryParams = (name: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(name, value);
      return prev;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const { name, value: input } = event.currentTarget;
      console.log(event.currentTarget);
      setQueryParams(name, input);
    }
  };

  const handleComboChange = (currentValue: string, name: string) => {
    setQueryParams(name, currentValue);
  };

  const clearAllFilters = () => {
    setSearchParams((prev) => {
      prev.delete('team');
      prev.delete('category');
      prev.delete('universe');
      prev.delete('status');
      prev.delete('strength');
      prev.delete('name');
      return prev;
    });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            name="name"
            ref={inputRef}
            placeholder="Search heroes, villains, powers, teams..."
            className="pl-12 h-12 text-lg bg-white"
            onKeyDown={handleKeyDown}
            defaultValue={searchParams.get('name') ?? ''}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            variant={
              activeAcordion === 'advance-filters' ? 'default' : 'outline'
            }
            className="h-12"
            onClick={() => {
              if (activeAcordion === 'advance-filters') {
                setQueryParams('active-acordion', '');
                //searchParams.delete('active-acordion'); //elimina de mis paramns
                return;
              }
              setQueryParams('active-acordion', 'advance-filters');
            }}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Button
            variant="outline"
            disabled
            className="h-12 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SortAsc className="h-4 w-4 mr-2" />
            Sort by Name
          </Button>

          <Button
            variant="outline"
            disabled
            className="h-12 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Grid className="h-4 w-4" />
          </Button>

          <Button
            disabled
            className="h-12 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Character
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}

      <Accordion type="single" collapsible value={activeAcordion}>
        <AccordionItem value="advance-filters">
          {/* <AccordionTrigger>Advanced filters</AccordionTrigger> */}
          <AccordionContent>
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Advanced Filters</h3>
                <Button variant="ghost" onClick={clearAllFilters}>
                  Clear All
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Team</label>
                  <div className="h-10 w-full">
                    <Popover open={openTeams} onOpenChange={setOpenTeams}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={openTeams}
                          className="w-[200px] justify-between"
                        >
                          {teamsValue
                            ? Teams.find((team) => team.value === teamsValue)
                                ?.label
                            : 'Select team...'}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search team..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>No team found.</CommandEmpty>
                            <CommandGroup>
                              {Teams.map((team) => (
                                <CommandItem
                                  key={team.value}
                                  value={team.value}
                                  onSelect={(currentValue) => {
                                    handleComboChange(currentValue, 'team');
                                    setOpenTeams(false);
                                  }}
                                >
                                  {team.label}
                                  <Check
                                    className={cn(
                                      'ml-auto',
                                      teamsValue === team.value
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    {/* All teams */}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <div className="h-10 w-full">
                    <Popover open={openCategory} onOpenChange={setOpenCategory}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={openCategory}
                          className="w-[200px] justify-between"
                        >
                          {categoryValue
                            ? Categories.find(
                                (team) => team.value === categoryValue
                              )?.label
                            : 'Select category...'}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search category..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>No team found.</CommandEmpty>
                            <CommandGroup>
                              {Categories.map((team) => (
                                <CommandItem
                                  key={team.value}
                                  value={team.value}
                                  onSelect={(currentValue) => {
                                    handleComboChange(currentValue, 'category');
                                    setOpenCategory(false);
                                  }}
                                >
                                  {team.label}
                                  <Check
                                    className={cn(
                                      'ml-auto',
                                      categoryValue === team.value
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    {/* All categories */}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Universe</label>
                  <div className="h-10 w-full">
                    <Popover open={openUniverse} onOpenChange={setOpenUniverse}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={openUniverse}
                          className="w-[200px] justify-between"
                        >
                          {universeValue
                            ? Universe.find(
                                (team) => team.value === universeValue
                              )?.label
                            : 'Select universe...'}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search universe..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>No team found.</CommandEmpty>
                            <CommandGroup>
                              {Universe.map((team) => (
                                <CommandItem
                                  key={team.value}
                                  value={team.value}
                                  onSelect={(currentValue) => {
                                    handleComboChange(currentValue, 'universe');
                                    setOpenUniverse(false);
                                  }}
                                >
                                  {team.label}
                                  <Check
                                    className={cn(
                                      'ml-auto',
                                      universeValue === team.value
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    {/* All universes */}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <div className="h-10 w-full">
                    <Popover open={openStatus} onOpenChange={setOpenStatus}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={openStatus}
                          className="w-[200px] justify-between"
                        >
                          {statusValue
                            ? Status.find((team) => team.value === statusValue)
                                ?.label
                            : 'Select status...'}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search status..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>No team found.</CommandEmpty>
                            <CommandGroup>
                              {Status.map((team) => (
                                <CommandItem
                                  key={team.value}
                                  value={team.value}
                                  onSelect={(currentValue) => {
                                    handleComboChange(currentValue, 'status');
                                    setOpenStatus(false);
                                  }}
                                >
                                  {team.label}
                                  <Check
                                    className={cn(
                                      'ml-auto',
                                      statusValue === team.value
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    {/* All statuses */}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium">
                  Minimum Strength: {selectedStrength}/10
                </label>
                <Slider
                  defaultValue={[selectedStrength]}
                  max={10}
                  step={1}
                  onValueChange={(value) =>
                    setQueryParams('strength', value[0].toString())
                  }
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
